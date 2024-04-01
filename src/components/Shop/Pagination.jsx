import { useEffect, useState } from "react"
import CardProduct from "../common/CardProduct"
import PaginationButtons from "./PaginationButtons"

const Pagination = ({ products }) => {
    const [productsPerPage, setProductsPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const [slicedProducts, setSlicedProducts] = useState([])

    const startPoint = (currentPage - 1) * productsPerPage
    const endPoint = startPoint + productsPerPage
    const pagesCount = Math.round(products.length / productsPerPage)
    console.log(slicedProducts);

    useEffect(() => {
        setSlicedProducts(products.slice(startPoint, endPoint))
    }, [productsPerPage, currentPage])

    const nextPageHandler = () => {
        if (currentPage < pagesCount) {
            setCurrentPage(prev => prev + 1)
        }
    }

    const prevPageHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }


    return (
        <section className="w-full">
            <div className="pb-10 grid items-center justify-center max-w-96 md:max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-b-border-1">
                {slicedProducts?.map(product => (
                    <CardProduct key={product.id} />
                ))}
            </div>
            <div className="pt-8">
                <PaginationButtons
                    prevPageHandler={prevPageHandler}
                    nextPageHandler={nextPageHandler}
                    currentPage={currentPage}
                    setcurrentPage={setCurrentPage}
                    pagesCount={pagesCount}
                />
            </div>
        </section>
    )
}

export default Pagination

// slice products to 9 sections
// show first 9 product
// when click on next, show after 9 products
// pagination page numbers: all products / productsPerPage ==> for loop
