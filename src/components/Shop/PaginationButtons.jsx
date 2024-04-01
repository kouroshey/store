import arrow from "/assets/arrow-bottom.svg"

const PaginationButtons = ({
    prevPageHandler,
    nextPageHandler,
    currentPage,
    setcurrentPage,
    pagesCount
}) => {
    const buttonStyle = " px-2 py-1 rounded-md border border-border-1 hover:bg-dark-1 transition-all flex items-center gap-4"

    let pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i)
    }

    const changePageHandler = (e) => {
        setcurrentPage(Number(e.target.innerHTML))
    }

    return (
        <div className="flex w-full justify-between">
            {/* PREV BUTTON */}
            <button
                onClick={() => prevPageHandler()}
                className={`${buttonStyle} ${currentPage === 1 ? "bg-dark-1 opacity-40 cursor-default" : "bg-white-transparent"}`}>
                <img src={arrow} className="rotate-90 w-4" /> Prev
            </button>
            {/* PAGE NUMBERS */}
            <div className="flex gap-2 justify-center">
                {pageNumbers.map((number, index) => (
                    <button
                        key={index}
                        onClick={(e) => changePageHandler(e)}
                        className={`${buttonStyle} ${currentPage === number ? "bg-dark-1" : 'bg-white-transparent'} `}
                    >
                        {number}
                    </button>
                ))}
            </div>
            {/* NEXT BUTTON */}
            <button onClick={() => nextPageHandler()} className={`${buttonStyle} ${currentPage === pagesCount ? "bg-dark-1 opacity-40 cursor-default" : 'bg-white-transparent'}`}>Next <img src={arrow} className="-rotate-90 w-4" /></button>
        </div>
    )
}

export default PaginationButtons