const MainContainer = ({ children }) => {
    return (
        <div className='px-4 md:px-16 lg:px-24 xl:px-28 flex flex-col gap-12'>
            {children}
        </div>
    )
}

export default MainContainer