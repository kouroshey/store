import { Link } from "react-router-dom"
import MainContainer from "../common/MainContainer"

const MainSection = () => {

    return (
        <MainContainer>
            <section className="py-4 gap-12 flex justify-between w-full">
                {/* START OF LOGO */}
                <div>
                    <Link to={"/"}>
                        <img src="/public/assets/logo-icon.png" className="w-28" alt="" srcset="" />
                    </Link>
                </div>
                {/* END OF LOGO */}
                {/* START OF searchbar section */}
                <div className="flex grow gap-0">
                    <input placeholder="Search for Products" type="text" className="rounded-l-md bg-dark-1 border-border-1 border-2 py-2 w-full px-2 text-white outline-none" />
                    <select name="" id="" className="text-white text-lg w-2/4 bg-dark-1 px-2 border-border-1 border-2">
                        <option className="bg-dark-2" value="all">All Categories</option>
                        <option className="bg-dark-2" value="one">one</option>
                        <option className="bg-dark-2" value="two">two</option>
                        <option className="bg-dark-2" value="three">three</option>
                    </select>
                    <span className="cursor-pointer bg-dark-1 flex px-3 items-center justify-center p-1 rounded-r-md border-border-1 border-2 text-white fill-current">
                        <img src="/public/assets/icons/search.svg" className="w-5" />
                    </span>
                </div>
                {/* END OF SEARCHBAR SECTION */}
                {/* START OF CALL US NOW SECTION */}
                <div className="flex gap-2">
                    <div>
                        <img src="/public/assets/icons/headphone.svg" className="w-8" />
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-sm">CALL US NOW</h5>
                        <p className="text-white font-medium">+011 5827918</p>
                    </div>
                </div>
                {/* END OF CALL US NOW SECTION */}
                {/* START OF LEFT SECTION ICONS */}
                <div className="flex gap-4 items-center">
                    <span><img className="w-8" src="/public/assets/icons/user.svg" /></span>
                    <span><img className="w-8" src="/public/assets/icons/heart.svg" /></span>
                    <span className="relative">
                        <img className="w-8" src="/public/assets/icons/bag.svg" />
                        <span className="absolute -top-1 -right-2 bg-dark-2 rounded-[50%] w-5 text-center text-white text-sm">8</span>
                    </span>
                </div>
                {/* END OF LEFT SECTION ICONS */}
            </section>
        </MainContainer>
    )
}

export default MainSection