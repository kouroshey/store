import { Button } from "../../common/Button"
import img1 from "/assets/img/new-arrivals/08.png"

const SecondArrival = () => {
    return (
        <div className="w-full max-w-96 h-full">
            <div className="bg-dark-1 m-2 flex flex-col justify-end gap-8">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-white text-xl text-center">Sunglass</p>
                    <p className="text-md text-center">Sunglass</p>
                    <Button buttonStyle={"transparent"} text={"SHOP BY GLASSES"} customStyle={"w-max"} />
                </div>
                <img src={img1} alt="" />
            </div>
        </div>
    )
}

export default SecondArrival