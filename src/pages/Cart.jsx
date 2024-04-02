import BreadCrumb from "../components/BreadCrumb"
import CartItem from "../components/Cart/CartItem"
import MainContainer from "../components/common/MainContainer"
import CartSidebar from "../components/Cart/CartSidebar"

const Cart = () => {
    return (
        <main>
            {/* top section - title and breadcrumps */}
            <section className='border-b border-b-border-1'>
                <MainContainer>
                    <div className='flex justify-between py-8'>
                        <h2 className='border-r border-border-1 pr-4 text-white text-2xl font-bold'>Cart</h2>
                        <BreadCrumb />
                    </div>
                </MainContainer>
            </section>
            {/* main section */}
            <MainContainer>
                <section className="flex flex-col lg:flex-row gap-4">
                    {/* cart items */}
                    <div className="flex flex1 md:flex-3 flex-col gap-4 py-4">
                        {/* product card */}
                        <CartItem />
                    </div>
                    {/* sidebar */}
                    <div className="flex flex-1">
                        <CartSidebar />
                    </div>
                </section>
            </MainContainer>
        </main>
    )
}

export default Cart