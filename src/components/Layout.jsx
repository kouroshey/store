import React from 'react'
import Header from './Header/Header'

const Layout = ({ children }) => {
    return (
        <div className="bg-image bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/public/assets/mainBg.png')" }}>
            <Header />
            {children}
        </div>
    )
}

export default Layout