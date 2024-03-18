import { menuNavItems } from '../../../data'
import { Link } from 'react-router-dom'
import closeIcon from "/assets/icons/close-icon.svg"
import arrowBottom from "/assets/arrow-bottom.svg"

const MobileNav = ({ navShowHandler, isNavbarShow }) => {
    const toggleMenuNav = () => {
        navShowHandler()
    }
    return (
        <div className={` ${isNavbarShow ? "bg-dark-1 backdrop-blur-sm translate-x-0" : '-translate-x-full'} flex transition-all ease-in-out duration-500 fixed top-0 h-screen w-screen z-50 `}>
            <nav className='bg-dark w-4/5 p-4 text-white flex flex-col gap-7'>
                <div className='flex justify-between w-full'>
                    <span className='text-2xl'>Menu</span>
                    <img
                        className='w-4 cursor-pointer'
                        onClick={toggleMenuNav}
                        src={closeIcon}
                        alt="close-icon" />
                </div>
                <ul >
                    {menuNavItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={toggleMenuNav}
                            className='flex gap-2 group py-4 relative items-start flex-col'
                        >
                            <Link to={"#"}>{item.title}</Link>
                            {item.children &&
                                <>
                                    <div className='absolute right-0 align-middle group-hover:rotate-180 transition-all'>
                                        <img className='w-3' src={arrowBottom} alt="" />
                                    </div>
                                    <div className='bg-dark-2 p-4 hidden group-hover:flex gap-12'>
                                        {item.children.map((child, index) => (
                                            <div key={index} className='flex flex-1 flex-col gap-4 w-max'>
                                                <span className='text-sm font-bold'>{child.title}</span>
                                                <ul className='flex flex-col gap-2'>
                                                    {child.items.map((item, index) => (
                                                        <li key={index}>{item.title}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav