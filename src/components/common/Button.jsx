import { Link } from 'react-router-dom';

export const Button = ({ buttonStyle, customStyle, text, icon, isLink, btnUrl }) => {
  const style = {
    dark: 'bg-dark text-white border-black',
    transparent: 'bg-white bg-opacity-10 outline-border-1 hover:outline-white',
    white: 'bg-white text-black',
    default: `px-2 py-2 font-semibold outline outline-1 flex gap-2 items-center border border-border-1
     transition-all ease-in-out text-xs w-full justify-center cursor-pointer 
    focus:outline-4 focus:outline-white-transparent focus:bg-white focus:text-black
    `,
  };

  return (
    <button
      className={`
      ${(buttonStyle === 'dark' && style.dark) ||
        (buttonStyle === 'transparent' && style.transparent) ||
        (buttonStyle === 'white' && style.white)
        } 
        ${customStyle && customStyle}
        ${style.default}
              `}
    >
      {isLink ? (
        <Link className=" " to={btnUrl}>
          <span>{text && text}</span>
          {icon && <img src={icon} />}
        </Link>
      ) : (
        <>
          {icon && <img className='w-4' src={icon} />}
          {text && <span className=" ">{text}</span>}
        </>
      )}
    </button>
  );
};
