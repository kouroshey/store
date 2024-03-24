import { Button } from "../../common/Button"
import img1 from "/assets/img/new-arrivals/04.png"

const FirstArrival = () => {
    return (
        <div className="w-full max-w-[25rem] h-full">
            <div className="bg-dark-1 flex flex-col">
                <img src={img1} alt="" className="w-full" />
                <div className="flex flex-col gap-2 p-4">
                    <p className="text-white text-xl">Sunglass</p>
                    <p className="text-md">Sunglass</p>
                    <Button buttonStyle={"transparent"} text={"SHOP BY GLASSES"} customStyle={"w-max"} />
                </div>
            </div>
        </div>
    )
}

export default FirstArrival