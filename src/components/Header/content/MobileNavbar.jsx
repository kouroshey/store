import React from 'react'
import { menuNavItems } from '../../../data'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <div className='lg:hidden flex bg-dark-1 fixed top-0 left-0 h-screen w-screen'>
            <nav className='bg-dark w-4/5 p-4 text-white flex flex-col gap-7'>
                <div className='flex justify-between w-full'>
                    <span className='text-2xl'>Menu</span>
                    <img className='w-4 cursor-pointer' src="/public/assets/icons/close-icon.svg" alt="" srcset="" />
                </div>
                <ul>
                    {menuNavItems.map((item, index) => (
                        <>
                            <li key={index} className='flex gap-2 group py-4 relative items-start flex-col'>
                                <Link to={"#"}>{item.title}</Link>
                                {item.children &&
                                    <>
                                        <div className='absolute right-0 align-middle group-hover:rotate-180 transition-all'>
                                            <img className='w-3' src="/public/assets/arrow-bottom.svg" alt="" srcset="" />
                                        </div>
                                        <div className='bg-dark-2 p-4 hidden group-hover:flex gap-12'>
                                            {item.children.map((child, index) => (
                                                <>
                                                    <div className='flex flex-1 flex-col gap-4 w-max'>
                                                        <span className='text-sm font-bold'>{child.title}</span>
                                                        <ul className='flex flex-col gap-2'>
                                                            {child.items.map((item, index) => (
                                                                <li key={index}>{item.title}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </>
                                }
                            </li>
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav