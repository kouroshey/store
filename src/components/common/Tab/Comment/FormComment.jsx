import React from 'react';

const FormComment = () => {
  return (
    <div className="w-full h-full p-6 bg-[#66656538] space-y-3 ">
      <div>Write a Review</div>
      <div>
        <p>Your Name</p>
        <input type="text" className="w-full h-8 px-2 text-black" />
      </div>
      <div>
        <p>Your Email</p>
        <input type="text" className="w-full h-8 px-2 text-black" />
      </div>
      <div>
        <p>Rating</p>
        <select type="text" className=" w-full h-8 px-2 text-black">
          <option value="1">Choose Rating</option>
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
        </select>
      </div>
      <div>
        <p>Example textarea</p>
        <textarea name="" id="" cols="30" rows="3" className="w-full p-2 text-black"></textarea>
      </div>
      <div>
        <button className=" transition-all w-full flex justify-center items-center bg-[#d4d4d43c] hover:bg-[#d4d4d45a]  active:bg-white  active:text-black py-3">
          SUBMIT A REVIEW
        </button>
      </div>
    </div>
  );
};

export default FormComment;
