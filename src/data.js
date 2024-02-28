import imgVisa from './../public/assets/img/visa.png';
import imgPaypal from './../public/assets/img/paypal.png';
import imgMsCard from './../public/assets/img/mastercard.png';
import imgAmricanEx from './../public//assets/img/american-express.png';

export const pTag = [
  'Cloths',
  'Electronis',
  'Furniture',
  'Sports',
  'Men Wear',
  'Women Wear',
  'Laptops',
  'Formal Shirts',
  'Topwear',
  'Headphones',
  'Bottom Wear',
  'Bottom Wear',
  'Sofa',
  'Shoes',
];

export const shopCategories = [
  'Jeans',
  'T-Shirts',
  'Sports',
  'Shirts & Tops',
  'Clogs & Mules',
  'Sunglasses',
  'Bags & Wallets',
  'Sneakers & Athletic',
  'Electronis',
  'Furniture',
];

export const topbarItems = [
  {
    title: "Track Order",
    url: "order-tracking"
  },
  {
    title: "About",
    url: "about-us"
  },
  {
    title: "Our Stores",
    url: "shop-categories"
  },
  {
    title: "Blog",
    url: "blog"
  },
  {
    title: "Contact",
    url: "contact-us"
  },
  {
    title: "#",
    url: "Help & FAQs"
  },
]

export const langs = [
  { name: "ENG", img: "/public/assets/flags/um.svg" },
  { name: "GERMAN", img: "/public/assets/flags/de.svg" },
  { name: "FRENCH", img: "/public/assets/flags/fr.svg" },
]

export const currencies = [
  "USD", "EUR"
]

export const socialMediaIcons = [
  { id: 1, name: "facebook", path: "/public/assets/icons/facebook.svg", url: "#" },
  { id: 2, name: "X", path: "/public/assets/icons/X.svg", url: "#" },
  { id: 3, name: "Linkedin", path: "/public/assets/icons/linkedin.svg", url: "#" },
]

export const menuNavItems = [
  {
    title: "HOME",
    url: ""
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
            url: ""
          },
          {
            title: "CASUAL T_SHIRTS",
            url: ""
          },
          {
            title: "CASUAL T_SHIRTS",
            url: ""
          },
        ]
      },
      {
        title: "FASHION",
        items: [
          {
            title: "CASUAL T_SHIRTS",
            url: ""
          },
          {
            title: "CASUAL T_SHIRTS",
            url: ""
          },
          {
            title: "CASUAL T_SHIRTS",
            url: ""
          },
        ]
      },
    ]
  },
  {
    title: "SHOP",
    url: ""
  },
  {
    title: "BLOG",
    url: ""
  },
  {
    title: "ABOUT US",
    url: ""
  },
  {
    title: "CONTACT US",
    url: ""
  },
]

export const imgPayCard = [imgVisa, imgPaypal, imgMsCard, imgAmricanEx];
