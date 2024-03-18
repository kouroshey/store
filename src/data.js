import imgVisa from "/assets/img/visa.png";
import imgPaypal from "/assets/img/paypal.png";
import imgMsCard from "/assets/img/mastercard.png";
import imgAmricanEx from "/assets/img/american-express.png";
import engIcon from "/assets/flags/um.svg";
import gerIcon from "/assets/flags/de.svg";
import fraIcon from "/assets/flags/fr.svg";
import facebookIcon from "/assets/icons/facebook.svg";
import xIcon from "/assets/icons/X.svg";
import linkedinIcon from "/assets/icons/linkedin.svg";
import slide1 from "/assets/img/main-slider/03.png";
import slide2 from "/assets/img/main-slider/04.png";
import slide3 from "/assets/img/main-slider/05.png";

export const pTag = [
  "Cloths",
  "Electronis",
  "Furniture",
  "Sports",
  "Men Wear",
  "Women Wear",
  "Laptops",
  "Formal Shirts",
  "Topwear",
  "Headphones",
  "Bottom Wear",
  "Bottom Wear",
  "Sofa",
  "Shoes",
];

export const shopCategories = [
  "Jeans",
  "T-Shirts",
  "Sports",
  "Shirts & Tops",
  "Clogs & Mules",
  "Sunglasses",
  "Bags & Wallets",
  "Sneakers & Athletic",
  "Electronis",
  "Furniture",
];

export const topbarItems = [
  {
    title: "Track Order",
    url: "order-tracking",
  },
  {
    title: "About",
    url: "about-us",
  },
  {
    title: "Our Stores",
    url: "shop-categories",
  },
  {
    title: "Blog",
    url: "blog",
  },
  {
    title: "Contact",
    url: "contact-us",
  },
  {
    title: "Help & FAQs",
    url: "#",
  },
];

export const langs = [
  { name: "ENG", img: engIcon },
  { name: "GERMAN", img: gerIcon },
  { name: "FRENCH", img: fraIcon },
];

export const currencies = ["USD", "EUR"];

export const socialMediaIcons = [
  { id: 1, name: "facebook", path: facebookIcon, url: "#" },
  { id: 2, name: "X", path: xIcon, url: "#" },
  { id: 3, name: "Linkedin", path: linkedinIcon, url: "#" },
];

export const menuNavItems = [
  {
    title: "HOME",
    url: "",
  },
  {
    title: "CATEGORIES",
    url: "",
    children: [
      {
        title: "FASHION",
        items: [
          {
            title: "CASUAL T_SHIRTS",
            url: "",
          },
          {
            title: "CASUAL T_SHIRTS",
            url: "",
          },
          {
            title: "CASUAL T_SHIRTS",
            url: "",
          },
        ],
      },
      {
        title: "FASHION",
        items: [
          {
            title: "CASUAL T_SHIRTS",
            url: "",
          },
          {
            title: "CASUAL T_SHIRTS",
            url: "",
          },
          {
            title: "CASUAL T_SHIRTS",
            url: "",
          },
        ],
      },
    ],
  },
  {
    title: "SHOP",
    url: "",
  },
  {
    title: "BLOG",
    url: "",
  },
  {
    title: "ABOUT US",
    url: "",
  },
  {
    title: "CONTACT US",
    url: "",
  },
];

export const imgPayCard = [imgVisa, imgPaypal, imgMsCard, imgAmricanEx];

export const mainSliderDatas = [
  {
    id: "1",
    img: slide1,
    title: "Complete your look with",
    subTitle: "New Men's Accessories",
    desc: "Hats & Caps, Sunglasses, Bags & much more...",
    url: "",
  },
  {
    id: "2",
    img: slide2,
    title: "Has just arrived!",
    subTitle: "Huge Summer Collection",
    desc: "Swimwear, Tops, Shorts, Sunglasses & much more...",
    url: "",
  },
  {
    id: "3",
    img: slide3,
    title: "Hurry up! Limited time offer.",
    subTitle: "Women Sportswear Sale",
    desc: "Sneakers, Keds, Sweatshirts, Hoodies & much more...",
    url: "",
  },
];
