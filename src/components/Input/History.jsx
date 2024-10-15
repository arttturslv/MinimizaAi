import HistoryItem from "./HistoryItem"

export default function History({ urlList, setUrlList }) {
    return (
            urlList.length>0 && 
                (
                <div className="bg-eerieBlackLight top-10 px-8 py-1 rounded-3xl">
                    {
                    urlList.map((item, index) => (
                        <HistoryItem key={index} 
                            shortLink={item.shortLink}
                            URL={item.original}  
                            Id={item.id}
                            setUrlList={setUrlList}
                        />
                    ))
                    }
                </div>
                )
    )
}


