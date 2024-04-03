import BreadCrumb from "../components/BreadCrumb"
import CartItem from "../components/Cart/CartItem"
import MainContainer from "../components/common/MainContainer"
import CartSidebar from "../components/Cart/CartSidebar"
import { Button } from "../components/common/Button"

import bagIcon from "../../public/assets/icons/bag.svg"
import updateIcon from "../../public/assets/icons/circle-arrow-dark.svg"
import deleteIcon from "../../public/assets/icons/delete.svg"

const Cart = () => {
    return (
        <main>
            {/* top section - title and breadcrumps ===================>*/}
            <section className='border-b border-b-border-1'>
                <MainContainer>
                    <div className='flex justify-between py-8'>
                        <h2 className='border-r border-border-1 pr-4 text-white text-2xl font-bold'>Cart</h2>
                        <BreadCrumb />
                    </div>
                </MainContainer>
            </section>
            {/* main section ===================>*/}
            <MainContainer>
                <section className="flex flex-col lg:flex-row gap-4 py-8">
                    {/* cart items ===================>*/}
                    <div className="flex flex1 md:flex-3 flex-col gap-4 py-4">
                        {/* product card===================> */}
                        <div className="py-4">
                            <CartItem />
                        </div>
                        {/* action buttons ===================>*/}
                        <div className="flex items-center flex-col gap-4 md:flex-row justify-between w-full">
                            <Button customStyle={"w-max text-white"} text={"CONTINUE SHOPPING"} buttonStyle={"transparent"} icon={bagIcon} />
                            <div className="flex gap-4 flex-col md:flex-row items-center">
                                <Button customStyle={"w-max text-white"} text={"CLEAR CART"} buttonStyle={"transparent"} icon={deleteIcon} />
                                <Button customStyle={"w-max"} text={"update cart"} buttonStyle={"white"} icon={updateIcon} />
                            </div>
                        </div>
                    </div>
                    {/* sidebar ===================>*/}
                    <div className="flex flex-1">
                        <CartSidebar />
                    </div>
                </section>
            </MainContainer>
        </main>
    )
}

export default Cart