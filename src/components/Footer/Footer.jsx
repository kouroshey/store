import './Footer.css';
import { pTag, shopCategories, imgPayCard } from '../../data';
import imgApple from '/assets/img/apple-store.png';
import imgGoogelplay from '/assets/img/play-store.png';
import arrowRight2 from '/assets/icons/icons8-forward-100.png';
import MainContainer from '../common/MainContainer';

const Footer = () => {
  return (
    <div className="bg-dark-1 grid grid-cols-1  py-3 gap-3">
      <MainContainer>
        {/* GRID 4 ROW */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 ">
          {/* CONTACT INFO------------------------------------ */}
          <div className="flex flex-col ">
            <h2 className="font-bold text-[#d8d5d5]">CONTACT INFO</h2>
            <div className="flex gap-5 flex-col mt-2">
              <div>
                <h5 className="text-title">ADDRESS</h5>
                <p className="text-xs">123 Street Name, City, Australia</p>
              </div>
              <div>
                <h5 className="text-title">PHONE</h5>
                <p className="text-xs">Toll Free (123) 472-796</p>
                <p className="text-xs">Mobile : +91-9910XXXX</p>
              </div>
              <div>
                <h5 className="text-title">EMAIL</h5>
                <p className="text-xs">mail@example.com</p>
              </div>
              <div>
                <h5 className="text-title">WORKING DAYS</h5>
                <p className="text-xs">Mon - FRI / 9:30 AM - 6:30 PM</p>
              </div>
            </div>
          </div>{' '}
          {/* SHOP CATEGORIES------------------------------------ */}
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[#d8d5d5]">SHOP CATEGORIES</h2>
            {shopCategories.map((item, index) => (
              <div key={index} className="flex flex-row btn-category gap-1 items-center">
                <img className="w-3 h-3 text" srcSet={arrowRight2} alt="" />
                <p className="text-sm font-normal text-blue-100">{item}</p>
              </div>
            ))}
          </div>
          {/* POPULAR TAGS------------------------------------ */}
          <div className="min-h-0">
            <h2 className="font-bold text-[#d8d5d5]">POPULAR TAGS </h2>
            <div className="flex flex-row flex-wrap">
              {pTag.map((item, index) => {
                return (
                  <div
                    className="text-[13px]  border-solid border-[1px] border-[#e2e2e21e] w-max bg-[#ffffff27] px-3 py-1 m-1 hover:cursor-pointer hover:border-[#ffffffb2]"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          {/* STAY INFORMED------------------------------------ */}
          <div className="flex flex-col gap-4  ">
            <h2 className="font-bold text-[#d8d5d5]">STAY INFORMED</h2>
            <input type="email" className="px-3 py-2 rounded-3xl text-white bg-[#67656550] outline-none" placeholder="Enter Your Email" />
            <input type="button" value={'Subscribe'} className="px-3 py-2 bg-white text-black cursor-pointer" />
            <p className="text-sm">Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
            <h2>DOWNLOAD OUR APP</h2>
            <div className="flex gap-3  flex-wrap max-w-xs ">
              <img src={imgApple} alt="" className="w-36 h-12 cursor-pointer" />
              <img src={imgGoogelplay} alt="" className="w-36 h-12 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex-grow border-t border-[#ffffff4a] mt-4 mb-4"></div>
        <div className="flex flex-col gap-5 place-items-center   ">
          <p className="text-sm">Copyright © 2021. All right reserved.</p>
          <div className="flex gap-5">
            {imgPayCard.map((item, index) => (
              <div key={index} className="rounded-lg w-[4.5rem] border-[1px] px-3 py-1 flex justify-center items-center bg-[#e2e2e223] ">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Footer;
