import Button from '../components/Button';
import {openURL} from '../API/Utils.js'

export default function Footer({togglePoliticaVisibility}) {

    return (
        <div className="w-full flex justify-center mt-16 ">
            <div className="bg-eerieBlackLight flex gap-4 px-4 py-2 my-2 rounded-xl shadow-s-input-box">
            <button type="button" onClick={togglePoliticaVisibility} className="bg-eerieBlack px-4 py-3 rounded-xl cursor-pointer group hover:bg-eerieBlack/60 ">
                <p className="text-seaSalt group-hover:text-celticBlue transition-colors">Acessar políticas de privacidade</p>
            </button>
            <div className="flex gap-3">
                <div className="bg-eerieBlack px-4 py-3 rounded-xl max-sm:hidden">
                    <p className="text-seaSalt">Esse aplicativo foi desenvolvido pelo Artttur</p>
                </div>
                <Button onClick={() => openURL("https://www.github.com/arttturslv")} >                    
                    <img width={32} height={32} src="https://i.imgur.com/Ka5k2Wa.png" alt="icone do github" />
                </Button>
            </div>
            </div>
        </div>
    )
}