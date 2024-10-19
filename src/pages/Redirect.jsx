import { useParams } from "react-router-dom";
import { getOriginalURL } from "../API/useApi";
import { useState, useEffect } from "react";
import Button from "../components/Button";
function Redirect() {

    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    async function handleGetOriginalURL(id) {
        setIsLoading(true); 
        const {data, error} = await getOriginalURL(id);
        setIsLoading(false);

        if(error) {
            setHasError(error);
            return;
        }

        console.log(data);
        window.location.href = data;
    }

    useEffect(() => {
        handleGetOriginalURL(id)
    }, [id])

    return (
        <div className="bg-jet w-full flex justify-center items-center h-screen ">
            {
                !hasError ?
                    <img className=" animate-spin " width={32} height={32} src="https://i.imgur.com/Jv0GKTg.png" alt="icone de carregamento" />
                :
                    <div className="flex-col flex justify-center items-center gap-8">
                        <img src="https://i.imgur.com/yFlD7Gw.png" alt="" />
                        <h1 className="text-seaSalt font-semibold text-xl">O endereço da web salvo neste link não está mais disponível.</h1>
                        <a className="text-seaSalt" href="/">
                            <div className="bg-eerieBlack px-4 py-3 rounded-xl max-sm:hidden">
                                <p className="text-seaSalt">Acessar a página inicial</p>
                            </div>
                        </a>
                    </div>
            }
        </div>
    )

}

export default Redirect
