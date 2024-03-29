import { useEffect, useRef, useState } from "react"
import { categories } from "../../data"

const Sidebar = () => {
    const [value, setValue] = useState(1)
    const myBubble = useRef()
    useEffect(() => {
        if (myBubble) {
            myBubble.current.style.left = `${Number(value)}px`;
        }
    })
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
                <div className="relative">
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={value}
                        onChange={({ target: { value: radius } }) => {
                            setValue(radius)
                        }}
                    />
                    <div ref={myBubble} className="w-6 top-0 rounded-full bg-white absolute">
                        {value}
                    </div>
                </div>
            </div>
            {/* END OF PRICE SECTION */}
        </section>
    )
}

export default Sidebar