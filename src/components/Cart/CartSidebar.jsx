import { Button } from "../common/Button"
import Input from "../common/Input"
import Select from "../common/Select"

const CartSidebar = () => {

    return (
        <section className="bg-dark-4 flex flex-col gap-4 p-4 shadow-md w-full h-max">
            {/* start of first box =============>*/}
            <div className="border border-border-1 p-4 flex flex-col gap-2 items-start">
                <p className="text-white text-lg">Apply Discount Code</p>
                <div className="flex justify-start">
                    <Input placeHolder="Enter Discount Code" label="" customStyle={"w-max"} />
                    <Button customStyle={"w-max"} text={"APPLY DISCOUNT"} buttonStyle={"transparent"} />
                </div>
            </div>
            {/* ennd of first box ==============> */}
            {/* start of second box =============>*/}
            <div className="border border-border-1 p-4 flex flex-col gap-2 items-start">
                <p className="text-white text-lg border-b border-b-border-1 pb-2 w-full">Estimate Shipping and Tax</p>
                <div className="flex flex-col gap-2 w-full">
                    <p className="text-sm">Country Name:</p>
                    <Select customStyle={"w-full"} />
                </div>
            </div>
            {/* ennd of second box ==============> */}
            {/* start of third box =============>*/}
            <div className="border border-border-1 p-4 flex flex-col gap-2 items-start">
                <div className="flex flex-col gap-4">
                    <div className="w-full flex justify-between items-center">
                        <span>Subtotal:</span>
                        <span>$198.00</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span>Shipping</span>
                        <span>---</span>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex gap-4 justify-between items-center">
                        <span className="text-white font-bold">Order Total:</span>
                        <span>$212.00</span>
                    </div>
                    <Button text={"PROCEED TO CHECKOUT"} buttonStyle={"white"} customStyle={"w-full"} />
                </div>
            </div>
            {/* ennd of third box ==============> */}
        </section>
    )
}

export default CartSidebar