import { RiRefreshLine } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import notFoundImg from "../../../public/assets/img/not-found.png"

import { FaCartShopping } from 'react-icons/fa6';
import { FiZoomIn } from 'react-icons/fi';
import { Button } from './Button';

import emptyStarIcon from "../../../public/assets/icons/star-empty.svg"
import starIcon from "../../../public/assets/icons/star.svg"

const CardProduct = ({
    label = "product",
    category = "t-shirt",
    price = "100",
    offPrice = "80",
    popularity = "3",
    img = notFoundImg,
}) => {
    let popularityArray = [
        {
            id: 1,
            src: emptyStarIcon
        },
        {
            id: 2,
            src: emptyStarIcon
        },
        {
            id: 3,
            src: emptyStarIcon
        },
        {
            id: 4,
            src: emptyStarIcon
        },
        {
            id: 5,
            src: emptyStarIcon
        },
    ]

    const popularityArrayBuilder = () => {
        const starCount = Number(popularity)
        if (popularity) {
            for (let i = 1; i <= starCount; i++) {
                popularityArray.shift()
            }

            for (let i = 1; i <= starCount; i++) {
                popularityArray.unshift({
                    id: i,
                    src: starIcon
                })
            }
        }
    }
    popularityArrayBuilder()
    const stars = popularityArray.map(star => (
        <img key={star.id} src={star.src} className='w-6' />
    ))


    return (
        <div className="h-[30rem] w-full flex flex-col py-2 px-3 gap-2 lg:hover:bg-dark-1 lg:hover:shadow-lg [&>:nth-child(4)]:hover:flex [&>:nth-child(1)>:nth-child(1)]:hover:flex ">
            {/* LIKE AND COMPIRE ------------------------------------*/}
            <div className="flex gap-3 justify-end">
                <div className="  transition-all items-center text-xs gap-1 hidden hover:text-white cursor-pointer  [&>:nth-child(1)]:hover:rotate-90  ">
                    <div>
                        <RiRefreshLine className="text-[0.8rem]" />
                    </div>
                    Compare
                </div>
                <div className="bg-white-transparent p-1  rounded-2xl w-min ">
                    <FaRegHeart className=" transition-all p-[0.1rem] text-slate-200 hover:text-slate-50" />
                </div>
            </div>
            {/* IMAGE PRODUCT------------------------------------**/}
            <div className="">
                <img src={img} alt="image-product" />
            </div>
            {/* TEXT AND PRICE  ------------------------------------* */}
            <div className="flex flex-col gap-1">
                <div className="text-[0.7rem]">{category}</div>
                <div className="text-[0.7rem] font-medium text-white">{label}</div>
                <div className="flex items-center gap-1">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-1">
                            <p className="text-[0.65rem]">
                                <s>$ {price}</s>
                            </p>
                            <p className="text-xs font-medium text-white">$ {offPrice}</p>
                        </div>
                        <div className="flex gap-[0.1rem] ">
                            {stars && stars}
                        </div>
                    </div>
                </div>
            </div>
            {/* BUTTON  ------------------------------------**/}
            <div className="= flex-col gap-2 hidden transition-all">
                <Button buttonStyle={'transparent'} iconBtn={<FaCartShopping />} text={'Add to Cart'} btnEffect={true} />
                <Button buttonStyle={'transparent'} iconBtn={<FiZoomIn />} text={'Quick View'} btnEffect={false} />
            </div>
        </div>
    );
};

export default CardProduct;
