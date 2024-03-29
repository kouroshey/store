import MainContainer from "../components/common/MainContainer"
import BreadCrumb from "../components/BreadCrumb"
import Sidebar from "../components/Shop/Sidebar"

const Shop = () => {
    return (
        <main>
            <div className='border-b border-b-border-1'>
                <MainContainer>
                    <div className='flex justify-between py-8'>
                        <h2 className='border-r border-border-1 pr-4 text-white text-2xl font-bold'>Shop</h2>
                        <BreadCrumb />
                    </div>
                </MainContainer>
            </div>
            <MainContainer>
                <div className="flex gap-4 py-8">
                    <div className="hidden lg:flex flex-1">
                        <Sidebar />
                    </div>
                    <div className="text-white text-xl flex-3">main</div>
                </div>
            </MainContainer>
        </main>
    )
}

export default Shop