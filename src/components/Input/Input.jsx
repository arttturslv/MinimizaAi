import History from "./History"
import { useState, useEffect } from "react"
import {encurtar} from "../../API/useApi";

export default function Input({togglePoliticaVisibility}) {
    const [inputValue, setInputValue] = useState('');
    const [isURLValid, setIsURLValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    const [hasError, setHasError] = useState(false);


    async function handleSend(e) {
        e.preventDefault();
        console.log("enviar")

        setIsLoading(true); 
        const {data, error} = await encurtar(inputValue);
        setIsLoading(false);

        if(error) {
            setHasError(error);
            return;
        }

        storeLocally(data);

    }

    function storeLocally(response) {
        console.log(response)
        const objectURL = {
            shortLink : response.encurtado,
            original : response.original,
            visitas : response.visitas,
            data : response.data,
            id: response._id
        }
        console.log('response.id: ', response.id);

        let allLinks = localStorage.getItem("allLinks");
        allLinks = allLinks != null ? JSON.parse(allLinks) : [];
        allLinks.push(objectURL);

        localStorage.setItem('allLinks', JSON.stringify(allLinks))
    }



    function handleChange(e) {
        e.preventDefault();
        setInputValue(e.currentTarget.value);
        setIsURLValid(hasValidURL(e.currentTarget.value));
    }

    function hasValidURL(input) {
        let url;
        try {
            url = new URL(input);
            console.log(url)
            return true;
        } catch (error) {
            return false;
        }   
    }


    const [urlList, setUrlList] = useState([]);

    useEffect(() => {
        setUrlList(getAllUrls());
    }, [isLoading]);

    function getAllUrls() {
        let allLinks = localStorage.getItem('allLinks');
        allLinks = allLinks!=null ? JSON.parse(allLinks): []

        return allLinks;
    }


 
    return (
        <div className="w-full flex justify-center flex-1">
            <div className="bg-eerieBlackLight rounded-3xl h-min">
                <div className="bg-eerieBlack px-8 py-5 rounded-3xl">
                    <form onSubmit={(e)=>handleSend(e)} action="">
                        <div className=" flex gap-3">
                            <input onChange={(e)=> handleChange(e)} value={inputValue} className="w-[640px] max-sm:w-full bg-jet px-4 py-2 rounded-xl text-seaSalt" type="text" name="" id="" placeholder="Insira o link aqui" />
                            
                            <button disabled={isLoading} type="submit" >
                                <div className="p-2 bg-eerieBlack rounded-xl transition-all hover:bg-eerieBlack/60 cursor-pointer">
                                   
                                   {
                                     !isLoading?
                                     <img width={32} height={32} src="https://i.imgur.com/50Y8SLg.png" alt="icone de enviar" />
                                     :
                                     <img width={32} height={32} className=" animate-spin" src="https://i.imgur.com/Jv0GKTg.png" alt="icone de carregamento" />

                                   }
                                </div>
                            </button>
                        </div>
                        { !isURLValid && <p className="text-xs text-[red]/40 -mb-2">A link digitado não é válido! Verifique a presença do protocolo: "https://".</p>}
                    </form>
                </div>
                <History togglePoliticaVisibility={togglePoliticaVisibility} urlList={urlList} setUrlList={setUrlList}/>
            </div> 
        </div>
    )
}