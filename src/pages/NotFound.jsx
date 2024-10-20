export default function NotFound( ) {
    return (
        <div className="bg-jet w-full flex justify-center items-center h-screen ">
            <div className="flex-col flex justify-center items-center gap-8">
                <h1 className="text-celticBlue font-black text-4xl">ERRO 404</h1>
                <img src="https://i.imgur.com/yFlD7Gw.png" alt="" />
                <h2 className="text-seaSalt font-semibold text-xl">Página não encontrada, verifique a URL</h2>
                <a className="text-seaSalt" href="/">
                    <div className="bg-eerieBlack hover:bg-eerieBlackLight px-4 py-3 rounded-xl max-sm:hidden">
                        <p className="text-seaSalt">Acessar a página inicial</p>
                    </div>
                </a>
            </div>
        </div>

    )
}