import MainContainer from "../components/common/MainContainer"
import BreadCrumb from "../components/BreadCrumb"
import Sidebar from "../components/Shop/Sidebar"
import Pagination from "../components/Shop/Pagination"
import { products } from "../data"

const Shop = () => {
    return (
        <main>
            {/* top section - title and breadcrumps */}
            <div className='border-b border-b-border-1'>
                <MainContainer>
                    <div className='flex justify-between py-8'>
                        <h2 className='border-r border-border-1 pr-4 text-white text-2xl font-bold'>Shop</h2>
                        <BreadCrumb />
                    </div>
                </MainContainer>
            </div>
            {/* main section */}
            <MainContainer>
                <div className="flex gap-4 py-8">
                    {/* sidebar */}
                    <div className="hidden xl:flex flex-1">
                        <Sidebar />
                    </div>
                    {/* main content */}
                    <div className="text-white text-xl flex-3">
                        <Pagination products={products} />
                    </div>
                </div>
            </MainContainer>
        </main>
    )
}

export default Shop