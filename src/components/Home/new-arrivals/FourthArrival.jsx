import { Button } from "../../common/Button"
import img1 from "/assets/img/new-arrivals/07.png"

const FourthArrival = () => {
    return (
        <div className="w-full h-full max-w-96 max-h-[30rem]">
            <div className="bg-dark-1 m-2 flex flex-col p-2">
                <img src={img1} alt="" />
                <div className="flex flex-col items-center gap-2     p-4">
                    <p className="text-white text-4xl font-bold text-center">SUPER SALE</p>
                    <p className="text-2xl text-white">UP TO 50% OFF</p>
                    <p className="text-sm">On All Electronic</p>
                    <Button buttonStyle={"transparent"} text={"SHOP BY GLASSES"} customStyle={"w-max"} />
                </div>
            </div>
        </div>
    )
}

export default FourthArrival