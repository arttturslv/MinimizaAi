import History from "./History"
import { useState } from "react"

export default function Input({togglePoliticaVisibility}) {
    const [inputValue, setInputValue] = useState('');
    const [isURLValid, setIsURLValid] = useState(true);

    function handleSend(e) {
        e.preventDefault();
        console.log("enviar")
    }


    function handleChange(e) {
        e.preventDefault();
        setInputValue(e.currentTarget.value);
        setIsURLValid(hasValidURL(inputValue));
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
 
    return (
        <div className="w-full flex justify-center flex-1">
            <div className="bg-eerieBlackLight rounded-3xl h-min">
                <div className="bg-eerieBlack px-8 py-5 rounded-3xl">
                    <form  action="">
                        <div className=" flex gap-3">
                            <input onChange={(e)=> handleChange(e)} onSubmit={()=>handleSend(e)} value={inputValue} className="max-w-[640px] w-full bg-jet px-4 py-2 rounded-xl text-seaSalt" type="text" name="" id="" placeholder="Insira o link aqui" />
                            
                            <button  type="submit" >
                                <div className="p-2 bg-eerieBlack rounded-xl hover:bg-eerieBlack/60 cursor-pointer">
                                    <img width={32} height={32} src="/src/assets/arrow-right.png" alt="icone de enviar" />
                                </div>
                            </button>
                        </div>
                        { !isURLValid && <p className="text-xs text-[red]/40 -mb-2">A link digitado não é válido! Verifique a presença do protocolo: "https://".</p>}
                    </form>
                </div>
                <History togglePoliticaVisibility={togglePoliticaVisibility}/>
            </div> 
        </div>
    )
}