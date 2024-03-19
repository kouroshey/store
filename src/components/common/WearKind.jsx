import { Button } from "./Button"

const WearKind = ({ img, title, subtitle, url }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-2">
            <div className="flex bg-dark-1 px-4 mb-4 justify-between items-center ">
                <img src={img} className="w-40 xl:w-48" alt="" />
                <div className="flex flex-col gap-2">
                    <p className="text-lg text-white">{title}</p>
                    <p className="text-md ">{subtitle}</p>
                    <Button customStyle={""} isLink={true} btnUrl={url} text={"shop now"} buttonStyle={"transparent"} />
                </div>
            </div>
        </div>
    )
}

export default WearKind