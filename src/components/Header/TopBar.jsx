import MainContainer from "../common/MainContainer"
import { Link } from "react-router-dom"

const TopBar = () => {
    return (
        <MainContainer>
            <section className="flex justify-between text-white py-4 text-[88%]">
                <div>WELCOME TO OUR ETRANS STORE!</div>
                <div className="flex gap-8">
                    <ul className="flex gap-4">
                        <li>
                            <Link to={"order-tracking"}>Track order</Link>
                        </li>
                        <li>
                            <Link to={"about-us"}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={"shop-categories"}>
                                Our Stores
                            </Link>
                        </li>
                        <li>
                            <Link to={"blog"}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to={"contact-us"}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                Help & FAQs
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex gap-4">
                        <li className="relative">
                            <a href="#">USD</a>
                            <ul className="bg-dark-2 rounded-sm absolute justify-end right-0 w-24 hidden">
                                <li className="gap-2 px-2 py-2 flex">
                                    <span>EUR</span>
                                </li>
                                <li className="gap-2 px-2 py-2 flex">
                                    <span>USD</span>
                                </li>
                            </ul>
                        </li>
                        <li className="relative">
                            <span className="flex gap-1 items-center group">
                                <img src="/public/assets/flags/um.svg" className="w-4 h-min" alt="" />
                                <a href="#">ENG</a>
                            </span>
                            <ul className="bg-dark-2 rounded-sm absolute justify-end right-0 w-32 hidden group-hover:flex">
                                <li className="gap-2 px-2 py-2 flex">
                                    <img className="w-4 h-min" src="/public/assets/flags/de.svg" alt="" />
                                    <span>German</span>
                                </li>
                                <li className="gap-2 px-2 py-2 flex">
                                    <img className="w-4 h-min" src="/public/assets/flags/fr.svg" alt="" />
                                    <span>French</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="flex">icons</ul>
                </div>
            </section>
        </MainContainer>
    )
}

export default TopBar