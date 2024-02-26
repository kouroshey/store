import { useState } from "react"
import MainContainer from "../common/MainContainer"
import { Link } from "react-router-dom"

const TopBar = () => {
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [isCurrencyOpen, setIsCurrency] = useState(false)
    const [currencies, setCurrencies] = useState(
        ["USD", "EUR"]
    )
    const [langs, setLangs] = useState([
        { name: "ENG", img: "/public/assets/flags/um.svg" },
        { name: "GERMAN", img: "/public/assets/flags/de.svg" },
        { name: "FRENCH", img: "/public/assets/flags/fr.svg" },
    ])

    const [socialMediaIcons, setSocialMediaIcons] = useState([
        { id: 1, name: "facebook", path: "/public/assets/icons/facebook.svg", url: "#" },
        { id: 2, name: "X", path: "/public/assets/icons/X.svg", url: "#" },
        { id: 3, name: "Linkedin", path: "/public/assets/icons/linkedin.svg", url: "#" },
    ])
    return (
        <MainContainer>
            <section className="flex justify-between items-center text-white text-[88%]">
                <div>WELCOME TO OUR ETRANS STORE!</div>
                <div className="flex gap-8 items-center">
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
                        <li className="relative group py-4">
                            <a href="#">USD</a>
                            <ul className="bg-dark-2 rounded-sm absolute justify-end right-0 w-24 hidden group-hover:block top-12">
                                {currencies.map((item, index) => (
                                    <li key={index} className="gap-2 px-2 py-2 flex cursor-pointer hover:bg-white hover:text-dark-2">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="relative group py-4">
                            <span className="flex gap-1 items-center">
                                <img src="/public/assets/flags/um.svg" className="w-4 h-min" alt="" />
                                <a href="#">ENG</a>
                            </span>
                            <ul className="bg-dark-2 rounded-sm absolute justify-end right-0 w-32 hidden group-hover:block top-12">
                                {langs.map((item, index) => (
                                    <li key={index} className="gap-2 px-2 py-2 flex items-center hover:bg-white hover:text-dark-2 cursor-pointer">
                                        <img className="w-4 h-min" src={item.img} alt="" />
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <ul className="flex gap-4">
                        {socialMediaIcons.map(item => (
                            <li key={item.id}>
                                <Link to={item.url}>
                                    <img className="w-4" src={item.path} alt={item.name} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </MainContainer>
    )
}

export default TopBar