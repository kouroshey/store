import { useState } from "react";
import classNames from "classnames";

const CheckBox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false)
    const checkHandler = () => {
        setIsChecked(prev => !prev)
    }
    return (
        <label className="group pl-6 block relative cursor-pointer text-md select-none"
            style={{
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none"
            }}
        >
            <input onChange={checkHandler} type="checkbox" className="custom-checkbox opacity-0 absolute cursor-pointer h-0 w-0" />
            <span className={classNames(`absolute top-1 flex justify-center items-center left-0 h-4 w-4 bg-full-transparent rounded-sm group-hover:bg-gray-300 group-hover:after:border-black `, {
                "outline-4 outline-full-transparent outline border border-white-transparent transition-all after:left-10 after:block after:top-1 after:w-1 after:h-2 after:border-r-2 after:border-b-2 after:rotate-45 after:border-white": isChecked
            })} />
            {label}
        </label>
    )
}

export default CheckBox