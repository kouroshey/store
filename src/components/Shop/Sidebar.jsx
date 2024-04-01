import { brands, categories, colors, sizes } from "../../data"
import MultiRangeSlider from "../MultiRangeSlider"
import { Button } from "../common/Button"
import CheckBox from "../common/CheckBox"

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
            <div className="pb-4 gap-6 flex flex-col border-b border-border-1 text-white">
                <p className="text-md font-bold">PRICE</p>
                <MultiRangeSlider
                    min={10}
                    max={1000}
                />
                <Button
                    buttonStyle={"white"}
                    text={"Filter"}
                    customStyle={"text-xl py-0 mt-8 "}
                />
            </div>
            {/* END OF PRICE SECTION */}
            {/* START OF SIZE SECTION */}
            <div className="flex gap-2 flex-col pb-4 border-b border-border-1">
                <p className="text-md font-bold text-white">SIZE</p>
                {sizes.map(size =>
                    <CheckBox key={size.id} label={size.title} />
                )}
            </div>
            {/* END OF SIZE SECTION */}
            {/* START OF BRANDS SECTION */}
            <div className="flex gap-2 flex-col pb-4 border-b border-border-1">
                <p className="text-md font-bold text-white">BRANDS</p>
                {brands.map(brand =>
                    <CheckBox key={brand.id} label={brand.label} />
                )}
            </div>
            {/* END OF BRANDS SECTION */}
            {/* START OF COLORS SECTION */}
            <div className="flex gap-2 flex-col">
                <p className="text-md font-bold text-white">BRANDS</p>
                {colors.map(brand =>
                    <label className="group pl-6 block relative cursor-pointer text-md select-none">
                        <span style={{ backgroundColor: brand.color }} className={`absolute top-1 flex justify-center items-center left-0 h-4 w-4 rounded-sm`} />
                        {brand.label}
                    </label>
                )}
            </div>
            {/* END OF COLORS SECTION */}
        </section>
    )
}

export default Sidebar