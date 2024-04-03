import MainContainer from "../../common/MainContainer"
import { Link } from "react-router-dom"

import { topbarItems, currencies, langs, socialMediaIcons } from "../../../data"
import arrowIcon from "../../../../public/assets/arrow-bottom.svg"
import flagIcon from "../../../../public/assets/flags/um.svg"

const TopBar = () => {

    return (
        <MainContainer>
            <section className="flex justify-between gap-4 items-center w-full text-white text-[88%]">
                <div className="hidden md:block">WELCOME TO OUR ETRANS STORE!</div>
                <div className="flex gap-8 items-center justify-between w-full md:w-max">
                    {/* START OF TOPBAR MENU */}
                    <ul className="hidden lg:flex gap-4">
                        {topbarItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.url}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    {/* END OF TOPBAR MENU */}
                    <div className="flex gap-8 w-full lg:w-max justify-between items-center">
                        {/* START OF TOPBAR LANG AND CURRENCY */}
                        <ul className="flex gap-4">
                            <li className="relative group py-4">
                                <span className="flex gap-2 items-center">
                                    <a href="#">USD</a>
                                    <img className='w-2' src={arrowIcon} alt="" />
                                </span>
                                <ul className="bg-dark-2 rounded-sm absolute justify-end w-24 hidden group-hover:block top-12 left-0 ">
                                    {currencies.map((item, index) => (
                                        <li key={index} className="gap-2 px-2 py-2 flex cursor-pointer hover:bg-white hover:text-dark-2">
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="relative group py-4">
                                <span className="flex gap-1 items-center">
                                    <img src={flagIcon} className="w-4 h-min" alt="" />
                                    <a href="#">ENG</a>
                                </span>
                                <ul className="bg-dark-2 rounded-sm absolute justify-end left-0  w-32 hidden group-hover:block top-12">
                                    {langs.map((item, index) => (
                                        <li key={index} className="gap-2 px-2 py-2 flex items-center hover:bg-white hover:text-dark-2 cursor-pointer">
                                            <img className="w-4 h-min" src={item.img} alt="" />
                                            <span>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        {/* END OF TOPBAR LANG AND CURRENCY */}
                        {/* START OF TOPBAR ICONS */}
                        <ul className="flex gap-4">
                            {socialMediaIcons.map(item => (
                                <li key={item.id}>
                                    <Link to={item.url}>
                                        <img className="w-4" src={item.path} alt={item.name} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* END OF TOPBAR ICONS */}
                    </div>
                </div>
            </section>
        </MainContainer>
    )
}

export default TopBar