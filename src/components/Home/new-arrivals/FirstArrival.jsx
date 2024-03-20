import { Button } from "../../common/Button"
import img1 from "/assets/img/new-arrivals/04.png"

const FirstArrival = () => {
    return (
        <div className="w-1/4">
            <div className="bg-dark-1 m-2 flex flex-col h-full">
                <img src={img1} alt="" />
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