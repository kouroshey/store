import MainSection from "./MainSection"
import Navbar from "./Navbar"
import TopBar from "./TopBar"

const Header = () => {
    return (
        <header className="bg-dark-1">
            <TopBar />
            <div className="border-y border-y-border-1 ">
                <MainSection />
            </div>
            <Navbar />

        </header>
    )
}

export default Header