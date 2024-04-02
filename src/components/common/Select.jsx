import classNames from "classnames"

const Select = ({ options, customStyle }) => {
    return (
        <select name="" id="" className={classNames("text-white py-2 px-2 text-sm outline-none focus:outline-4 focus:outline-white-transparent bg-dark-1 border-border-1 border-2", {
            customStyle: customStyle
        })}>
            <option className="bg-dark-2" value="all">Default Sorting</option>
            <option className="bg-dark-2" value="one">Popularity</option>
            <option className="bg-dark-2" value="two">Price: low to high</option>
            <option className="bg-dark-2" value="three">price: high to low</option>
        </select>
    )
}

export default Select