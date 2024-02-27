import React from 'react'
import MainContainer from '../common/MainContainer'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <MainContainer>
            <nav className=''>
                <ul className='flex gap-8 text-white text-xs'>
                    <li className='flex items-center'>
                        <Link to={"#"}>HOME</Link>
                    </li>
                    <li className='relative flex gap-2 items-center group py-4'>
                        <Link to={"#"}>CATEGORIES</Link>
                        <span>
                            <img className='w-2' src="/public/assets/arrow-bottom.svg" alt="" srcset="" />
                        </span>
                        {/* START OF CATEGORIES SUBMENU */}
                        <div className='bg-dark-2 p-4 absolute top-12 group-hover:flex hidden w-[35rem] '>
                            <div className='flex flex-1 flex-col gap-4'>
                                <h3>FASHION</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                </ul>
                            </div>
                            <div className='flex flex-1 flex-col gap-4'>
                                <h3>FASHION</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                    <li>CASUAL T-SHIRTS</li>
                                </ul>
                            </div>
                            <div className='flex flex-1 '>
                                <img className='w-full' src="/public/assets/menu-img.jpg" />
                            </div>
                        </div>
                        {/* END OF CATEGORIES SUBMENU */}
                    </li>
                    <li className='flex gap-2 items-center py-4'>
                        <Link to={"#"}>SHOP</Link>
                        <span><img className='w-2' src="/public/assets/arrow-bottom.svg" alt="" srcset="" /></span>
                    </li>
                    <li className='flex items-center'>
                        <Link to={"#"}>BLOG</Link>
                    </li>
                    <li className='flex items-center'>
                        <Link to={"#"}>ABOUT US</Link>
                    </li>
                    <li className='flex items-center'>
                        <Link to={"#"}>CONTACT US</Link>
                    </li>
                    <li className='flex items-center'>
                        <Link to={"#"}>OUR</Link> STORE</li>
                    <li className='flex gap-2 items-center py-4'>
                        <Link to={"#"}>
                            MY ACCOUNT
                        </Link>
                        <span><img className='w-2' src="/public/assets/arrow-bottom.svg" alt="" srcset="" /></span>
                    </li>
                </ul>
            </nav>
        </MainContainer>
    )
}

export default Navbar