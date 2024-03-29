import React from 'react';
import MainContainer from '../components/common/MainContainer';
import ImageProduct from '../../public/assets/img/featured-products/04.png';
import { FaRegHeart, FaStar, FaRegStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { AiOutlineYoutube } from 'react-icons/ai';
import Tab from '../components/common/Tab/Tab';
import Rating from '../components/common/Rating';
import ProductSlider from '../components/common/Product Slider/ProductSlider';

export const ProductDetails = () => {
  return (
    <div className="bg-dark-1 ">
      <MainContainer>
        <div>
          {/* HEADER AND ROUTER------------------------------------------- ------------------*/}
          <div className="hidden justify-between border-b border-[#e9e8e82e] py-4 lg:flex">
            <p>Allen Solly Men's Polo T-Shirt</p>
            <p> Home Shop Product Details</p>
          </div>

          <div>
            {/*  PRODUCT DETAILS ---------------------------------- --------------------------*/}
            <div className="flex py-3 text-xs flex-col lg:flex-row">
              {/* IMAGE PRODUCT AND COLOR----------- */}
              <div className=" border border-[#e9e8e82e] flex-1 ">
                <div className="flex justify-center">
                  <img src={ImageProduct} alt="" />
                </div>
                <div className="flex p-2 border border-[#e9e8e82e] gap-2 ">
                  <div className="border-r border-[#e9e8e82e]">
                    <img src={ImageProduct} alt="" />
                  </div>
                  <div className="border-r border-[#e9e8e82e]">
                    <img src={ImageProduct} alt="" />
                  </div>
                  <div className="border-r border-[#e9e8e82e]">
                    <img src={ImageProduct} alt="" />
                  </div>
                  <div className="border-rs border-[#e9e8e82e]">
                    <img src={ImageProduct} alt="" />
                  </div>
                </div>
              </div>
              {/* PRODUCT Text---------------------- */}
              <div className="flex flex-col gap-3 p-4 flex-1">
                <h1 className="text-xl font-bold">Allen Solly Men's Polo T-Shirt</h1>
                <div className="flex gap-2">
                  <div className="flex">
                    <Rating rate={2} />
                  </div>
                  <p>(24 Rating)</p>
                </div>
                <div className="flex gap-2 text-base font-bold">
                  <s className="text-[#fefefe62] text-[15px] font-semibold">$98.00</s>
                  <div className="text-slate-200">$49.00</div>
                </div>
                <div>
                  <div>Discription :</div>
                  <div className="">
                    Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black
                    and brown Odsy-1000 low-top sneakers.
                  </div>
                </div>
                <div className="flex gap-4">
                  <p>Product id</p>
                  <div>#BHU5879</div>
                </div>
                <div className="flex gap-4">
                  <p>Delivery</p>
                  <div>Russia, USA, and Europe</div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-1 justify-center  items-center w-10">
                    <label htmlFor="">Quantity</label>
                    <select name="selectQuantity" id="" className=" bg-[#2b2a2a2a]  w-full text-center ">
                      <option className="bg-[#1716166f]" value="1">
                        1
                      </option>
                      <option className="bg-[#1716166f]" value="2">
                        2
                      </option>
                      <option className="bg-[#1716166f]" value="3">
                        3
                      </option>
                      <option className="bg-[#1716166f]" value="4">
                        4
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1 justify-center  items-center w-10">
                    <label htmlFor="">Size</label>
                    <select name="selectSize" id="" className=" bg-[#2b2a2a2a]  w-full text-center ">
                      <option className="bg-[#1716166f]" value="S">
                        S
                      </option>
                      <option className="bg-[#1716166f]" value="M">
                        M
                      </option>
                      <option className="bg-[#1716166f]" value="L">
                        L
                      </option>
                      <option className="bg-[#1716166f]" value="XS">
                        XS
                      </option>{' '}
                      <option className="bg-[#1716166f]" value="XL">
                        XL
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div>Colors</div>
                    <div className="flex gap-2">
                      <div className="bg-red-400 w-4 h-4"></div>
                      <div className="bg-green-400 w-4 h-4"></div>
                      <div className="bg-blue-600 w-4 h-4"></div>
                      <div className="bg-yellow-400 w-4 h-4"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 border-b border-[#e9e8e82e] py-4">
                  <button className="flex gap-2  px-4 py-3 bg-white text-black  text-sm items-center btnchange">
                    <FaCartShopping /> ADD TO CART
                  </button>
                  <button className="flex gap-2  px-4 py-3 bg-[#a0a0a05c] border border-slate-400 text-xs items-center">
                    <FaRegHeart /> ADD TO WASHLIST
                  </button>
                </div>
                <div className="flex gap-2">
                  <div className="border-2 p-1 text-lg rounded-full border-[#f2f3f249] flex justify-center items-center">
                    <AiOutlineYoutube />
                  </div>
                  <div className="border-2 p-1 text-lg rounded-full border-[#f2f3f249] flex justify-center items-center">
                    <AiOutlineYoutube />
                  </div>
                  <div className="border-2 p-1 text-lg rounded-full border-[#f2f3f249] flex justify-center items-center">
                    <AiOutlineYoutube />
                  </div>
                  <div className="border-2 p-1 text-lg rounded-full border-[#f2f3f249] flex justify-center items-center">
                    <AiOutlineYoutube />
                  </div>
                  <div className="border-2 p-1 text-lg rounded-full border-[#f2f3f249] flex justify-center items-center">
                    <AiOutlineYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Tab />
          </div>
          <div>
            <ProductSlider />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
export default ProductDetails;
