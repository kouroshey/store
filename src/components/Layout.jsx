import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="bg-image bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/public/assets/mainBg.png')" }}>
            {children}
        </div>
    )
}

export default Layout