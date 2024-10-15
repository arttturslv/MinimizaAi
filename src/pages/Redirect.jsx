import { useParams } from "react-router-dom";
import { alongar } from "../API/useApi";
import { useState, useEffect } from "react";
function Redirect() {

    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    async function handleGet(id) {
        console.log("Iniciando")
        setIsLoading(true); 
        const {data, error} = await alongar(id);
        setIsLoading(false);

        if(error) {
            setHasError(error);
            return;
        }

        console.log(data);
        window.location.href = data;
    }

    useEffect(() => {
        handleGet(id)
    }, [id])

    return (
        <div className="bg-jet w-full flex justify-center items-center h-screen ">
            {
                !hasError ?
                    <img className=" animate-spin " width={32} height={32} src="https://i.imgur.com/Jv0GKTg.png" alt="" srcset="" />
                :
                    <div className="flex-col justify-center items-center ">
                        <p className="text-[red]/50 font-semibold text-xl">Error desconhecido!</p>
                    </div>

            }
        </div>
    )

}

export default Redirect
