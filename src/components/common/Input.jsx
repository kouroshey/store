const Input = ({
    type = "text",
    placeHolder = "",
    customStyle,
    label = "New Input",
    id = ""
}) => {

    const inputStyle = "bg-dark-4 border-2 border-border-1 rounded-sm transition-all ease-in-out outline-none px-2 py-1 text-white focus:border-none focus:outline-4 focus:outline-white-transparent"

    return (
        <div className="flex flex-col gap-2 md:flex-row items-center">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeHolder}
                className={`${inputStyle} ${customStyle && customStyle}`}
            />
        </div>
    )
}

export default Input