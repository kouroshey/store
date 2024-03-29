import { Link } from 'react-router-dom';

export const Button = ({ buttonStyle, customStyle, text, icon, isLink, btnUrl }) => {
  const style = {
    dark: 'bg-dark text-white border-black',
    transparent: 'bg-white bg-opacity-10',
    white: 'bg-white text-black',
    default: 'font-semibold flex gap-2 items-center border transition-all ease-in-out text-xs w-full justify-center cursor-pointer focus:outline focus:outline-4 focus:outline-white-transparent focus:bg-white focus:text-black',
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
        <Link className="px-8 py-3" to={btnUrl}>
          <span>{text && text}</span>
          {icon && <img src={icon} />}
        </Link>
      ) : (
        <>
          <span className="px-8 py-3">{text && text}</span>
          {icon && <img src={icon} />}
        </>
      )}
    </button>
  );
};
