import { useEffect, useState } from "react"

export default function History({togglePoliticaVisibility, urlList}) {
   

    return (
        <div className="bg-eerieBlackLight top-10 px-8 py-1 rounded-3xl">
            {
                urlList.length>0 ?
                    urlList.map((item, index) => (
                        <HistoryItem key={index} 
                            shortLink={item.shortLink}
                            URL={item.original}  
                        />
                    ))
                :

                <p className="text-seaSalt"> 
                    Ao usar o aplicativo, você concorda com nossos ‎
                    <a className="text-celticBlue underline cursor-pointer" onClick={togglePoliticaVisibility}>termos e condições</a>
                    ‎
                    e
                    ‎
                    <a className="text-celticBlue underline cursor-pointer" onClick={togglePoliticaVisibility}>politica de privacidade</a>
                    .
                </p>
            }
            
            

            {/* <HistoryItem 
                shortLink={"s.artttur.com/asdauj13"}
                URL={"https://www.youtube.com/watch?v=tFAE_CHUyFs"}  
            /> */}
        </div>
    )
}


function HistoryItem({shortLink, URL}) {
    const [wasCopied, setWasCopied] = useState(false);


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

    function handleDelete() {
        console.log("Deletar")
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
            <button disabled={true} type="submit" >
                <div className="p-2 hidden bg-eerieBlack rounded-xl hover:bg-eerieBlack/60 cursor-pointer">
                    <img width={32} height={32} src="https://i.imgur.com/VghKyeE.png" onClick={handleDelete} alt="icone de deletar" />
                </div>
            </button>
        </div>
    )
}