import { useState } from "react"
import { deleteById } from "../../API/useApi";
import Button from "../Button";
import { openURL, copyToClipboard, deleteLocally } from '../../API/Utils'

export default function HistoryItem({shortLink, URL, Id, setUrlList}) {
    const [wasCopied, setWasCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleCopyLink(link) {
        setWasCopied(true);

        try {
            copyToClipboard(link);
            setTimeout(()=> {
                setWasCopied(false)
            }, 1000)
        } catch (error) {
            throw new Error("Erro ao copiar: ", error);
        }
    }

    async function handleDelete() {
        try {
            setIsLoading(true);
            
            await deleteById(Id);
            const newArray = deleteLocally(Id)
            setUrlList(newArray);
            
            setIsLoading(false);
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
                            <p className="text-celticBlue underline">{window.location.href}{shortLink}</p>
                        }

                        <img height={16} className="object-contain" src="https://i.imgur.com/6E7nm2P.png"  alt="icone de enviar" />
                    </div>
                    
                    <p className="hover:text-celticBlue underline cursor-pointer text-seaSalt text-wrap whitespace-break-spaces text-ellipsis break-all w-[90%]" onClick={() => openURL(URL)}>{URL}</p>
                </span>
            </div>

            <Button onClick={handleDelete} hasShadow={true} isLoading={isLoading} disabled={isLoading} >                    
                <img width={32} height={32} src="https://i.imgur.com/VghKyeE.png" alt="icone de deletar" />
            </Button>
        </div>
    )
}