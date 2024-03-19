const IconBox = ({
    title,
    subtitle,
    icon,
    border
}) => {
    return (
        <div className={`flex w-full justify-center md:justify-start gap-8 py-5 ${border ? "md:border-l md:border-border-1 md:pl-8 h-full" : ""}`}>
            <img src={icon} className="w-10" alt="" />
            <div className="flex flex-col">
                <p className="text-md text-white ">{title}</p>
                <p className="text-sm">{subtitle}</p>
            </div>
        </div>
    )
}

export default IconBox