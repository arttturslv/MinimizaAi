export default function Button ({children, hasShadow=false, ...props})  {
    return (
        <button {...props} type="submit" >
            <div className={`p-2 bg-eerieBlack rounded-xl ${hasShadow?"shadow-s-input-box":null} transition-all hover:bg-eerieBlack/40 cursor-pointer`}>
                {children}
            </div>
        </button>
    )
}