import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  buttonStyle,
  customStyle,
  text,
  icon,
  effect,
  isLink,
  btnUrl
}) => {

  const style = {
    dark: "bg-dark text-white border-black",
    transparent: "bg-white bg-opacity-10",
    white: "bg-white text-black",
    default: "font-semibold flex gap-2 items-center hover:bg-red-500 border text-xs w-full justify-center focus:outline-md focus:outline-white cursor-pointer"
  }

  const mainButton = (
    <button
      className={`
      ${buttonStyle === "dark" && style.dark ||
        buttonStyle === "transparent" && style.transparent ||
        buttonStyle === "white" && style.white} 
        ${style.default}
        ${customStyle && customStyle}
              `}
    >
      <span>
        {text && text}
      </span>
      {icon && <img src={icon} />}
    </button>
  )

  return (
    <button
      className={`
      ${buttonStyle === "dark" && style.dark ||
        buttonStyle === "transparent" && style.transparent ||
        buttonStyle === "white" && style.white} 
        ${customStyle && customStyle}
        ${style.default}
              `}
    >

      {
        isLink ?
          <Link className='px-8 py-3' to={btnUrl}>
            <span>
              {text && text}
            </span>
            {icon && <img src={icon} />}
          </Link> :
          <>
            <span className='px-8 py-3'>
              {text && text}
            </span>
            {icon && <img src={icon} />}
          </>
      }
    </button>
  )
};
