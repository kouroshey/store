import gridMenuIcon from "../../../public/assets/icons/grid-menu.svg"
import gridMenuIconDark from "../../../public/assets/icons/grid-menu-dark.svg"
import listMenuIcon from "../../../public/assets/icons/list-menu.svg"
import listMenuIconDark from "../../../public/assets/icons/list-menu-dark.svg"
import Select from "../common/Select"

const PaginationControls = ({
    isListLayout,
    changeLayoutHandler,
    changeProductsPerPageHandler
}) => {
    const productPerPageHandler = (e) => {
        changeProductsPerPageHandler(Number(e.target.value))
    }
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <span className="text-white text-sm min-w-16">Sort By:</span>
                <Select />
            </div>
            <div className="flex gap-2">
                <div className="flex items-center">
                    <span className="text-white text-sm min-w-16">Show:</span>
                    <select onChange={productPerPageHandler} name="" id="" className="text-white py-2 px-2 text-sm outline-none focus:outline-4 focus:outline-white-transparent w-3/4 bg-dark-1 border-border-1 border-2">
                        <option className="bg-dark-2" value="9">9</option>
                        <option className="bg-dark-2" value="12">12</option>
                        <option className="bg-dark-2" value="16">16</option>
                    </select>
                </div>
                <div
                    className={` p-3 cursor-pointer hover:outline hover:outline-1 outline-border-1 hover:outline-white transition-all"
                        ${isListLayout ? 'bg-white' : 'bg-white-transparent'}`}
                    onClick={() => changeLayoutHandler()}
                >
                    <img
                        className="w-4"
                        src={isListLayout ? listMenuIconDark : listMenuIcon}
                        alt="grid-menu-layout-icon"
                    />
                </div>
                <div
                    className={` p-3 cursor-pointer hover:outline hover:outline-1 outline-border-1 hover:outline-white transition-all"
                        ${!isListLayout ? 'bg-white' : 'bg-white-transparent'}`}
                    onClick={() => changeLayoutHandler()}
                >
                    <img
                        className="w-4"
                        src={!isListLayout ? gridMenuIconDark : gridMenuIcon}
                        alt="grid-menu-layout-icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default PaginationControls