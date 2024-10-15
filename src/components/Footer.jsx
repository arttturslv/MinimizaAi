export default function Footer({togglePoliticaVisibility}) {

    function handleGithub() {
        window.open("https://www.github.com/arttturslv", "_blank")
    }

    return (
        <div className="w-full flex justify-center mt-16 ">
            <div className="bg-eerieBlackLight flex gap-4 px-4 py-2 my-2 rounded-xl">
            <button type="button" onClick={togglePoliticaVisibility} className="bg-eerieBlack px-4 py-3 rounded-xl cursor-pointer group hover:bg-eerieBlack/60 ">
                <p className="text-seaSalt group-hover:text-celticBlue transition-colors">Acessar politicas de privacidade</p>
            </button>
            <div className="flex gap-3">
                <div className="bg-eerieBlack px-4 py-3 rounded-xl max-sm:hidden">
                    <p className="text-seaSalt">Esse aplicativo foi desenvolvido pelo Artttur</p>
                </div>
                <div className="p-2 flex items-center bg-eerieBlack rounded-xl hover:bg-eerieBlack/60 cursor-pointer">
                    <img width={32} height={32} src="./../assets/github.png" onClick={handleGithub} alt="icone do github" />
                </div>
            </div>
            </div>
        </div>
    )
}