import { Button } from "../../common/Button"
import img1 from "/assets/img/new-arrivals/06.png"

const ThirdArrival = () => {
    return (
        <div className="w-full h-full max-w-96 max-h-[30rem]">
            <div className="bg-dark-1 m-2 flex flex-col items-center relative">
                <img src={img1} className="" />
                <div className="flex flex-col items-center gap-5 p-4 border-4 border-white bg-dark-3 absolute top-1/4">
                    <p className="text-white text-xl">Fashion Summer Sale</p>
                    <p className="text-3xl text-white">UP TO 80% OFF</p>
                    <p className="text-lg">On top Fashion Brands</p>
                    <Button buttonStyle={"white"} text={"SHOP BY GLASSES"} customStyle={"w-max"} />
                </div>
            </div>
        </div>
    )
}

export default ThirdArrival