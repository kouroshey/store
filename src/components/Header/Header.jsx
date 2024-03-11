import MainSection from "./content/MainSection"
import MobileNav from "./content/MobileNavbar"
import Navbar from "./content/Navbar"
import TopBar from "./content/TopBar"

const Header = () => {
    const [isMobileSize, setfirst] = useState(second)
    return (
        <header className="bg-dark-1">
            <TopBar />
            <div className="border-y border-y-border-1 ">
                <MainSection />
            </div>
            <Navbar />
            <MobileNav />
        </header>
    )
}

export default Header