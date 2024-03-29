import { Link, useLocation } from "react-router-dom"
import homeIcon from "../../public/assets/icons/home.svg"
import buttomArrowIcon from "../../public/assets/arrow-bottom.svg"

const BreadCrumb = () => {
    const { pathname } = useLocation()

    let currentPath = ''

    const crumbs = pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index) => {
            currentPath = + `/${crumb}`
            return (
                <Link to={currentPath} key={index} className="flex gap-2">
                    <img src={buttomArrowIcon} className="w-3 -rotate-90" />
                    {crumb}
                </Link>
            )
        }
        )

    const homeCrumb = <Link to={'/'} className="flex gap-2 items-center">
        <img src={homeIcon} className="w-4" />
        Home
    </Link>

    return (
        <div className="flex gap-4 text-white text-md items-center">
            {homeCrumb}
            {crumbs}
        </div>
    )
}

export default BreadCrumb