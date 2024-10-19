import { useState, useEffect } from "react"

import History from "./History"
import Button from "../Button";

import { addLocally, retriveLocally, hasValidURL } from '../../API/Utils.js'
import { createShortURL } from "../../API/useApi";

export default function Input() {
    const [inputValue, setInputValue] = useState(''); //armazena o input
    const [isURLValid, setIsURLValid] = useState(true); //boolean que armazena se url é valida
    const [isLoading, setIsLoading] = useState(false); //verifica o status da requisição
    const [storedUrls, setStoredUrls] = useState([]); //armazena as URLs
    const [hasError, setHasError] = useState(false); //armazena erros da requisição

    useEffect(() => {
        setStoredUrls(retriveLocally());
    }, [isLoading]);

    async function handleSend(e) {
        e.preventDefault();

        if(!isURLValid || inputValue.length <= 0) {
            setIsURLValid(false)
            console.log("URL inválida. A requisição não foi executada.")
            return;
        }

        setIsLoading(true); 
        const {data, error} = await createShortURL(inputValue);
        setIsLoading(false);

        if(error) {
            setHasError(error);
            return;
        }
        storeLocally(data);
    }

    function storeLocally(response) {
        const objectURL = {
            shortLink : response.encurtado,
            original : response.original,
            visitas : response.visitas,
            data : response.data,
            id: response._id
        }
        addLocally(objectURL);
    }

    function handleChange(e) {
        setInputValue(e.currentTarget.value);
        setIsURLValid(hasValidURL(e.currentTarget.value));
    }

    return (
        <div className="w-full flex justify-center flex-1">
            <div className="bg-eerieBlackLight rounded-3xl h-min shadow-s-input-box">
                <div className="bg-eerieBlack px-8 py-5 rounded-3xl">
                    <form onSubmit={(e)=> handleSend(e)}>
                        <div className=" flex gap-3">
                            <input onChange={(e)=> handleChange(e)} value={inputValue} className="shadow-s-input w-[640px] max-sm:w-full bg-jet px-4 py-2 rounded-xl text-seaSalt" type="text" name="" id="" placeholder="Insira o link aqui" />
                            <Button hasShadow={true} isLoading={isLoading} disabled={isLoading || !isURLValid} >                    
                                <img width={32} height={32} src="https://i.imgur.com/50Y8SLg.png" alt="icone de enviar" />
                            </Button>
                        </div>
                        { 
                            !isURLValid && <p className="text-xs text-redWood -mb-3 pt-1">A link digitado não é válido! Verifique a presença do protocolo: "https://"</p>
                        }
                    </form>
                </div>
                <History storedUrls={storedUrls} setStoredUrls={setStoredUrls}/>
            </div> 
        </div>
    )
}