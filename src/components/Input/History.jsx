import { useEffect, useState } from "react"
import {deleteById} from "../../API/useApi";

export default function History({togglePoliticaVisibility, urlList, setUrlList}) {
   

    return (
        
            urlList.length>0 && (
                <div className="bg-eerieBlackLight top-10 px-8 py-1 rounded-3xl">
                
                       {
                            urlList.map((item, index) => (
                                <HistoryItem key={index} 
                                    shortLink={item.shortLink}
                                    URL={item.original}  
                                    Id={item.id}
                                    setUrlList={setUrlList}
                                />
                            ))

                    // <p className="text-seaSalt"> 
                    //     Ao usar o aplicativo, você concorda com nossos ‎
                    //     <a className="text-celticBlue underline cursor-pointer" onClick={togglePoliticaVisibility}>termos e condições</a>
                    //     ‎
                    //     e
                    //     ‎
                    //     <a className="text-celticBlue underline cursor-pointer" onClick={togglePoliticaVisibility}>politica de privacidade</a>
                    //     .
                    // </p>

                       }
                
                
                
                </div>
            )

    
    )
}


function HistoryItem({shortLink, URL, Id, setUrlList}) {
    const [wasCopied, setWasCopied] = useState(false);
    const [onLoading, setOnLoading] = useState(false);


    function handleCopyLink(link) {
        let currentUrl = window.location.href;
        try {
            navigator.clipboard.writeText(currentUrl+link);
            setWasCopied(true);

            setTimeout(()=> {
                setWasCopied(false)
            }, 1000)

        } catch (error) {   
            console.log("Erro ao copiar: ", error)
        }
    }

    function handleOpen(link) {
        window.open(link, "_blank")
    }

    async function handleDelete() {

        console.log(Id);
        try {
            setOnLoading(true);
            await deleteById(Id);

            let allLinks = localStorage.getItem('allLinks');
            allLinks = allLinks !=null ? JSON.parse(allLinks) : [];

            const newArray = allLinks.filter((item) => item.id != Id) || [];
            setUrlList(newArray);
            
            localStorage.setItem('allLinks', JSON.stringify(newArray));

            setOnLoading(false);
        } catch (error) {
            console.log("Erro no history ao deletar: ", error)
        }
    }

    return (
        <div className="flex gap-3 my-2">
            <div className="max-w-[640px] w-full bg-eerieBlackDark px-4 py-2 rounded-xl text-seaSalt">
                <span className="">
                    <div onClick={() => handleCopyLink(shortLink)} className="flex gap-2 cursor-pointer">
                        {
                            wasCopied ? 
                            <p className="font-extralight text-celticBlue ">O link foi copiado!</p>
                                :
                            <p className="text-celticBlue underline">{shortLink}</p>
                        }

                        <img height={16} className="object-contain" src="https://i.imgur.com/6E7nm2P.png"  alt="icone de enviar" />
                    </div>
                    
                    <p className="hover:text-celticBlue underline cursor-pointer text-seaSalt text-wrap whitespace-break-spaces text-ellipsis break-all w-[90%]" onClick={() => handleOpen(URL)}>{URL}</p>
                </span>
            </div>
            <button disabled={onLoading} type="submit" >
                <div  onClick={handleDelete} className="p-2 hover:bg-[red]/10 bg-eerieBlack rounded-xl cursor-pointer">
                    
                    {
                        !onLoading?
                        <img width={32} height={32} src="https://i.imgur.com/VghKyeE.png" alt="icone de deletar" />
                        :
                        <img width={32} height={32} className=" animate-spin" src="https://i.imgur.com/Jv0GKTg.png" alt="icone de carregamento" />
                    }
                </div>
            </button>
        </div>
    )
}