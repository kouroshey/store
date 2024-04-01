import { categories } from "../../data"
import MultiRangeSlider from "../range-slider/MultiRangeSlider"

const Sidebar = () => {

    return (
        <section className="bg-dark-4 flex flex-col gap-4 p-4 shadow-md w-full">
            {/* START OF CATEGORIES SECTION */}
            <div className="pb-4 border-b border-border-1 text-white">
                <p className="text-md font-bold pb-4">CATEGORIES</p>
                <ul className="text-sm flex flex-col gap-2  ">
                    {categories.map(item => (
                        <li key={item.id} className="flex justify-between items-center">
                            <span>{item.title}</span>
                            <span className="bg-white-transparent text-xs py-1 px-2 rounded-full">{item.number}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* END OF CATEGORIES SECTION */}
            {/* START OF PRICE SECTION */}
            <div className="pb-4 border-b border-border-1 text-white">
                <p className="text-md font-bold pb-4">PRICE</p>
                <MultiRangeSlider
                    min={10}
                    max={1000}
                />
            </div>
            {/* END OF PRICE SECTION */}
        </section>
    )
}

export default Sidebar