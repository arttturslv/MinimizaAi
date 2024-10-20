export default function Button ({children, hasShadow=false, isLoading=false, ...props})  {
    return (
        <button {...props} type="submit" >
            <div className={`p-2 bg-eerieBlack active:shadow-s-button-active rounded-xl ${hasShadow?"shadow-s-button":null} transition-all hover:bg-jet/30 cursor-pointer`}>
                { !isLoading ?
                    children
                    :
                    <img width={32} height={32} className=" animate-spin" src="https://i.imgur.com/Jv0GKTg.png" alt="icone de carregamento" />
                }
            </div>
        </button>
    )
}