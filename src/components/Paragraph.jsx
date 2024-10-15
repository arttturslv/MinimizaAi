export default function Paragraph ({title, children }) {
    return (
        <div className="py-1">
            <h4 className=" font-semibold">{title}</h4>
            {children}
        </div>
    )
}