import { Link } from "react-router-dom"
import MainContainer from "../../common/MainContainer"
import Select from "../../common/Select"

import logoIcon from "../../../../public/assets/logo-icon.png"
import searchIcon from "../../../../public/assets/icons/search.svg"
import headphoneIcon from "../../../../public/assets/icons/headphone.svg"
import menuIcon from "../../../../public/assets/menu-icon.svg"
import userIcon from "../../../../public/assets/icons/user.svg"
import heartIcon from "../../../../public/assets/icons/heart.svg"
import bagIcon from "../../../../public/assets/icons/bag.svg"
import { useAuthContext } from "../../../context/AuthContext"

const MainSection = ({ navShowHandler }) => {
    const toggleMenuNav = () => {
        navShowHandler()
    }
    const authContext = useAuthContext()

    return (
        <MainContainer>
            <section className="py-4 gap-4 lg:gap-12 flex flex-col lg:flex-row justify-between w-full">
                {/* START OF LOGO */}
                <div className="hidden lg:flex order-1">
                    <Link to={"/"}>
                        <img src={logoIcon} className="w-28" alt="" />
                    </Link>
                </div>
                {/* END OF LOGO */}
                {/* START OF SEARCHBAR SECTION */}
                <div className="flex grow gap-0 order-2">
                    <input placeholder="Search for Products" type="text" className="rounded-l-md bg-dark-1 border-border-1 border-2 py-2 w-full px-2 text-white outline-none" />
                    <Select options={["All Categories", "one", "two", "tree"]} />
                    <span className="cursor-pointer bg-dark-1 flex px-3 items-center justify-center p-1 rounded-r-md border-border-1 border-2 text-white fill-current">
                        <img src={searchIcon} className="w-5" />
                    </span>
                </div>
                {/* END OF SEARCHBAR SECTION */}
                {/* START OF CALL US NOW SECTION */}
                <div className="gap-2 hidden xl:flex order-3">
                    <div>
                        <img src={headphoneIcon} className="w-8" />
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-sm">CALL US NOW</h5>
                        <p className="text-white font-medium">+011 5827918</p>
                    </div>
                </div>
                {/* END OF CALL US NOW SECTION */}
                <div className="w-full lg:w-max flex justify-between items-center order-1 lg:order-4">
                    {/* START OF MOBILE MENU ICON */}
                    <div className="lg:hidden">
                        <img
                            onClick={toggleMenuNav}
                            src={menuIcon}
                            className="w-5 hover:scale-105 cursor-pointer"
                            alt="menu-icon" />
                    </div>
                    {/* END OF MOBILE MENU ICON */}
                    {/* START OF RIGHT SECTION ICONS */}
                    <div className="flex gap-4 items-center">
                        <Link
                            to={authContext.isLogin ? "dashboard" : "login"}>
                            <img className="w-6 rounded-full"
                                src={authContext.isLogin ? authContext.user.icon : userIcon} />
                        </Link>
                        <Link to={"dashboard"}>
                            <img className="w-6" src={heartIcon} />
                        </Link>
                        <Link to={"/shop/cart"}>
                            <span className="relative">
                                <img className="w-6" src={bagIcon} />
                                <span className="absolute -top-1 -right-2 bg-dark-2 rounded-[50%] w-5 text-center text-white text-sm">6</span>
                            </span>
                        </Link>
                    </div>
                    {/* END OF RIGHT SECTION ICONS */}
                </div>
            </section>
        </MainContainer>
    )
}

export default MainSection