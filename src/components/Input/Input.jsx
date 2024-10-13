import History from "./History"
export default function Input() {

    function handleSend() {
        console.log("enviar")
    }

    return (
        <div className="w-full flex justify-center flex-1">
            <div className="bg-eerieBlackLight rounded-3xl h-min">
                <div className="bg-eerieBlack px-8 py-5 rounded-3xl">
                    <form className=" flex gap-3" action="">
                        <input className="w-[640px] bg-jet px-4 py-2 rounded-xl text-seaSalt" type="text" name="" id="" placeholder="Insira o link aqui" />
                        <button type="submit" >
                            <div className="p-2 bg-eerieBlack rounded-xl hover:bg-eerieBlack/60 cursor-pointer">
                                <img width={32} height={32} src="/src/assets/arrow-right.png" onClick={handleSend} alt="icone de enviar" />
                            </div>
                        </button>
                    </form>
                </div>
                <History/>
            </div> 
        </div>
    )
}