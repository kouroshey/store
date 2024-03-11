import React from 'react'
import MainContainer from '../common/MainContainer'
import { Link } from 'react-router-dom'
import { menuNavItems } from '../../data'
import arrowBottomIcon from "/assets/arrow-bottom.svg"

const Navbar = () => {
    return (
        <MainContainer>
            <nav className='hidden lg:block'>
                <ul className='flex gap-8 text-white text-xs'>
                    {menuNavItems.map((item, index) => (
                        <li key={index} className='flex items-center gap-2 group py-4 relative'>
                            <Link to={"#"}>{item.title}</Link>
                            {item.children &&
                                <>
                                    <span>
                                        <img className='w-2' src={arrowBottomIcon} alt="" />
                                    </span>
                                    <div className='bg-dark-2 p-4 absolute top-12 group-hover:flex hidden gap-12'>
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
        </MainContainer>
    )
}

export default Navbar