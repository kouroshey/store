import MainSection from "./MainSection"
import Navbar from "./Navbar"
import TopBar from "./TopBar"

const Header = () => {
    return (
        <header className="bg-dark-1">
            <TopBar />
            <MainSection />
            <Navbar />
        </header>
    )
}

export default Header