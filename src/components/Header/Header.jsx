import MainSection from "./content/MainSection"
import MobileNav from "./content/MobileNavbar"
import Navbar from "./content/Navbar"
import TopBar from "./content/TopBar"
import useWidth from "../../hooks/useWidth"
import { useState } from "react"

const Header = () => {
    const { breakpoints, width } = useWidth()
    const [isNavbarShow, setIsNavbarShow] = useState(false)

    const navShowHandler = () => {
        setIsNavbarShow((prev) => !prev)
    }

    return (
        <header className="bg-dark-1">
            <TopBar />
            <div className="border-y border-y-border-1 ">
                <MainSection navShowHandler={navShowHandler} isNavbarShow={isNavbarShow} />
            </div>
            {width > breakpoints.lg ?
                <Navbar /> :
                <MobileNav navShowHandler={navShowHandler} isNavbarShow={isNavbarShow} />
            }
        </header>
    )
}

export default Header