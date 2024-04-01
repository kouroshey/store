import { useCallback, useEffect, useRef, useState } from "react"
import classNames from "classnames";
import PropTypes from "prop-types";

const MultiRangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)

    const minValRef = useRef(null)
    const maxValRef = useRef(null)
    const range = useRef(null)

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    )

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(minVal)
            const maxPercent = getPercent(+maxValRef.current.value)
            if (range.current) {
                range.current.style.left = `${minPercent}%`
                range.current.style.width = `${maxPercent - minPercent}%`
            }
        }
    }, [min, minVal])

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(+minValRef.current.value)
            const maxPercent = getPercent(maxVal)

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`
            }
        }

    }, [max, maxVal])

    return (
        <div className='w-full flex items-center justify-center'>
            <input
                type="range"
                max={max}
                min={min}
                value={maxVal}
                ref={maxValRef}
                className="thumb pointer-events-none absolute h-0 w-72 outline-none z-40"
                onChange={(e) => {
                    const value = Math.max(+e.target.value, minVal + 1);
                    setMaxVal(value);
                    e.target.value = value.toString();
                }}
            />
            <input
                type="range"
                max={max}
                min={min}
                value={minVal}
                ref={minValRef}
                className={classNames("thumb pointer-events-none absolute h-0 w-72 outline-none z-30", {
                    "z-50": minVal > max - 100
                })}
                onChange={(e) => {
                    const value = Math.min(+e.target.value, maxVal - 1);
                    setMinVal(value);
                    e.target.value = value.toString();
                }}
            />

            <div className="relative w-full">
                {/* slider track */}
                <div className="rounded-md h-2 absolute bg-full-transparent w-full z-10" />
                {/* slider range */}
                <div ref={range} className="rounded-md h-2 absolute bg-white z-20" />
                {/* left value */}
                <div className="text-gray-300 text-sm mt-5 absolute left-1">{minVal} $</div>
                {/* right value */}
                <div className="text-gray-300 text-sm mt-5 absolute right-1">{maxVal} $</div>
            </div>
        </div>
    )
}

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
};
export default MultiRangeSlider