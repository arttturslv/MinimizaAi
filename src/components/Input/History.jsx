import HistoryItem from "./HistoryItem"

export default function History({ storedUrls, setStoredUrls }) {
    return (
        storedUrls.length>0 && 
                (
                <div className="bg-eerieBlackLight top-10 px-8 py-1 rounded-3xl">
                    {
                    storedUrls.map((item, index) => (
                        <HistoryItem key={index} 
                            shortLinkId={item.shortLinkId}
                            originalURL={item.originalURL}  
                            id={item.id}
                            setStoredUrls={setStoredUrls}
                        />
                    ))
                    }
                </div>
                )
    )
}


