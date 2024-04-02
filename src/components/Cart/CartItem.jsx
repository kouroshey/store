import productImage from '../../../public/assets/img/featured-products/02.png';
import Input from "../common/Input";
import { Button } from "../common/Button";
import deleteIcon from "../../../public/assets/icons/delete.svg"
import heartIcon from "../../../public/assets/icons/heart-stroke.svg"

const CartItem = () => {
    return (
        <div className="flex flex-col items-center justify-between md:flex-row gap-4 pr-4 border-b border-border-1">
            {/* product image */}
            <div className="flex flex-col items-center lg:flex-row gap-2">
                <img
                    src={productImage}
                    alt="product image"
                    className="max-h-32"
                />
                <div className="flex flex-col gap-2 items-center lg:items-start">
                    {/* product label */}
                    <span className="text-white text-center  text-lg font-bold">White Regular Fit Polo T-Shirt</span>
                    {/* product size */}
                    <span className="text-sm text-center ">Size: Regular</span>
                    {/* product color */}
                    <span className="text-sm text-center ">Color: White & Blue</span>
                    {/* product PRICE */}
                    <span className="text-white  text-center text-lg font-bold">$ 13.00</span>
                </div>
            </div>
            <Input type="number" label="count:" customStyle={"w-24 xl:w-min"} />
            <div className="flex gap-2">
                <Button buttonStyle={"transparent"} icon={deleteIcon} text={"REMOVE"} customStyle={"w-max text-white"} />
                <Button buttonStyle={"transparent"} icon={heartIcon} customStyle={"w-max"} />
            </div>
        </div>
    )
}

export default CartItem