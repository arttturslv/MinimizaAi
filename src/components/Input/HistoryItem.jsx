import { useState } from "react"
import { deleteById } from "../../API/useApi";
import Button from "../Button";
import { openURL, copyToClipboard, deleteLocally } from '../../API/Utils'

export default function HistoryItem({shortLinkId, originalURL, id, setStoredUrls}) {
    const [wasCopied, setWasCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleCopyLink() {
        setWasCopied(true);
        try {
            copyToClipboard(shortLinkId);
            setTimeout(()=> {
                setWasCopied(false)
            }, 1000)
        } catch (error) {
            console.log("Erro ao copiar: ", error);
        }
    }

    async function handleDelete() {
        try {
            setIsLoading(true);
            
            await deleteById(id);
            const newArray = await deleteLocally(id)
            setStoredUrls(newArray);
            
            setIsLoading(false);
        } catch (error) {
            console.log("Erro no history ao deletar: ", error)
        }
    }

    function showShortLink() {
        let locationHREF = window.location.href;
        locationHREF = locationHREF.replace("https://"," ");
        locationHREF = locationHREF.replace("http://","");

        let link = locationHREF + shortLinkId;
        return link;
    }

    return (
        <div className="flex gap-3 my-2">
            <div className="max-w-[640px] w-full bg-eerieBlackDark px-4 py-2 rounded-xl text-seaSalt">
                <span className="">
                    <div onClick={() => handleCopyLink()} className="flex gap-2 cursor-pointer">
                            <p className="text-celticBlue underline">{showShortLink()}</p>
                            <img height={16} className={`object-contain ${wasCopied?"animate-ping transition-transform":"null"}`} src={wasCopied? "https://i.imgur.com/iW8C4ho.png" :"https://i.imgur.com/6E7nm2P.png"}  alt="icone de enviar" />
                    </div>
                    
                    <p className="hover:text-celticBlue underline cursor-pointer text-seaSalt text-wrap whitespace-break-spaces text-ellipsis break-all w-[90%]" onClick={() => openURL(originalURL)}>{originalURL}</p>
                </span>
            </div>

            <Button onClick={handleDelete} hasShadow={true} isLoading={isLoading} disabled={isLoading} >                    
                <img width={32} height={32} src="https://i.imgur.com/VghKyeE.png" alt="icone de deletar" />
            </Button>
        </div>
    )
}