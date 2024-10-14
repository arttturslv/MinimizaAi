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

    function handleCopyLink() {
        console.log("copiado")
    }

    function handleOpen(URL) {
        console.log(URL)
        window.open("https://www.github.com/arttturslv", "_blank")
    }

    function handleDelete() {
        console.log(URL)
        window.open("https://www.github.com/arttturslv", "_blank")
    }

    return (
        <div className="flex gap-3 my-2">
            <div className="max-w-[640px] w-full bg-eerieBlackDark px-4 py-2 rounded-xl text-seaSalt">
                <span>
                    <div className="flex gap-2 cursor-pointer">
                        <p className="text-celticBlue underline">{shortLink}</p>
                        <img height={16} className="object-contain" src="/src/assets/copy.png" onClick={handleCopyLink} alt="icone de enviar" />
                    </div>
                    
                    <p className="hover:text-celticBlue underline cursor-pointer text-seaSalt text-wrap whitespace-break-spaces text-ellipsis break-all w-[90%]" onClick={handleOpen}>{URL}</p>
                </span>
            </div>
            <button type="submit" >
                <div className="p-2 bg-eerieBlack rounded-xl hover:bg-eerieBlack/60 cursor-pointer">
                    <img width={32} height={32} src="/src/assets/trash.png" onClick={handleDelete} alt="icone de enviar" />
                </div>
            </button>
        </div>
    )
}