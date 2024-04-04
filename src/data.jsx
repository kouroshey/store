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
import icon1 from "/assets/icons/car.svg";
import icon2 from "/assets/icons/dollar.svg";
import icon3 from "/assets/icons/headset.svg";
import wearKind1 from "/assets/img/wear-kind/01.png";
import wearKind2 from "/assets/img/wear-kind/02.png";
import wearKind3 from "/assets/img/wear-kind/03.png";
import DashboardTab from "./components/Dashboard/DashboardTab";
import Orders from "./components/Dashboard/Orders";
import Downloads from "./components/Dashboard/Downloads";
import Addresses from "./components/Dashboard/Addresses";
import PaymentMethods from "./components/Dashboard/PaymentMethods";
import AccountDetails from "./components/Dashboard/AccountDetails";
import speedMeterIcon from "/assets/icons/speedmeter.svg"
import cartIcon from "/assets/icons/cart.svg"
import creditCardIcon from "/assets/icons/credit-card.svg"
import downloadIcon from "/assets/icons/downloads.svg"
import homeIcon from "/assets/icons/home.svg"
import logoutIcon from "/assets/icons/logout.svg"
import personIcon from "/assets/icons/person.svg"
import product1 from "/assets/img/featured-products/02.png"
import product2 from "/assets/img/featured-products/03.png"
import product3 from "/assets/img/featured-products/04.png"

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
    url: "shop",
    children: [
      {
        title: "SHOP PAGES",
        items: [
          {
            title: "SHOP PAGE",
            url: "/shop"
          },
          {
            title: "CART PAGE",
            url: "/shop/cart"
          }
        ],
      },
    ]
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
    url: "/",
    buttonStyle: "dark",
  },
  {
    id: "2",
    img: slide2,
    title: "Has just arrived!",
    subTitle: "Huge Summer Collection",
    desc: "Swimwear, Tops, Shorts, Sunglasses & much more...",
    url: "/",
    buttonStyle: "transparent",
  },
  {
    id: "3",
    img: slide3,
    title: "Hurry up! Limited time offer.",
    subTitle: "Women Sportswear Sale",
    desc: "Sneakers, Keds, Sweatshirts, Hoodies & much more...",
    url: "/",
    buttonStyle: "white",
  },
];

export const firstIconBoxesData = [
  {
    id: "1",
    title: "FREE SHIPPING & RETURN",
    subtitle: "Free shipping on all orders over $49",
    icon: icon1,
  },
  {
    id: "2",
    title: "MONEY BACK GUARANTEE",
    subtitle: "100% money back guarantee",
    icon: icon2,
  },
  {
    id: "3",
    title: "ONLINE SUPPORT 24/7",
    subtitle: "Awesome Support for 24/7 Days",
    icon: icon3,
  },
];

export const wearKindsData = [
  {
    id: "1",
    title: "MEN'S WEAR",
    subtitle: "STARTING AT 9$",
    img: wearKind1,
    url: "",
  },
  {
    id: "2",
    title: "WOMEN'S WEAR",
    subtitle: "STARTING AT 12$",
    img: wearKind2,
    url: "",
  },
  {
    id: "3",
    title: "KID'S WEAR",
    subtitle: "STARTING AT 5$",
    img: wearKind3,
    url: "",
  },
];

export const dashboardTabs = [
  {
    id: 1,
    label: "Dashboard",
    element: <DashboardTab />,
    icon: speedMeterIcon
  },
  {
    id: 2,
    label: "Orders",
    element: <Orders />,
    icon: cartIcon
  },
  {
    id: 3,
    label: "Downloads",
    element: <Downloads />,
    icon: downloadIcon
  },
  {
    id: 4,
    label: "Addresses",
    element: <Addresses />,
    icon: homeIcon
  },
  {
    id: 5,
    label: "Payment Methods",
    element: <PaymentMethods />,
    icon: creditCardIcon
  },
  {
    id: 6,
    label: "Account details",
    element: <AccountDetails />,
    icon: personIcon
  },
  {
    id: 7,
    label: "Logout",
    element: <DashboardTab />,
    icon: logoutIcon
  },
];

export const categories = [
  {
    id: "1",
    title: "Clothings",
    number: "42",
    link: "clothings"
  },
  {
    id: "2",
    title: "Sunglasses",
    number: "21",
    link: "sunglasses"
  },
  {
    id: "3",
    title: "Bags",
    number: "12",
    link: "bags"
  },
  {
    id: "4",
    title: "Watches",
    number: "18",
    link: "watches"
  },
  {
    id: "5",
    title: "Furniture",
    number: "8",
    link: "furniture"
  },
]

export const sizes = [
  {
    id: "1",
    title: "Small",
    link: "small"
  }, {
    id: "2",
    title: "Medium",
    link: "medium"
  }, {
    id: "3",
    title: "Large",
    link: "large"
  },
]

export const brands = [
  {
    id: "1",
    label: "Adidas",
    url: ""
  },
  {
    id: "2",
    label: "Adidas",
    url: ""
  },
  {
    id: "3",
    label: "Adidas",
    url: ""
  },
  {
    id: "4",
    label: "Adidas",
    url: ""
  },
  {
    id: "5",
    label: "Adidas",
    url: ""
  },
  {
    id: "6",
    label: "Adidas",
    url: ""
  },
]

export const colors = [
  {
    id: "1",
    color: "#FFC107",
    label: "Yellow"
  },
  {
    id: "2",
    color: "#FFC107",
    label: "Yellow"
  },
  {
    id: "3",
    color: "#FFC107",
    label: "Yellow"
  },
  {
    id: "4",
    color: "#FFC107",
    label: "Yellow"
  },
]

export const products = [
  {
    id: "1",
    label: "product 1",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product1,
  },
  {
    id: "2",
    label: "product 2",
    category: "t-shirt",
    price: "40",
    offPrice: "20",
    popularity: "1",
    img: product2,
  },
  {
    id: "3",
    label: "product",
    category: "t-shirt",
    price: "60",
    offPrice: "20",
    popularity: "4",
    img: product3,
  },
  {
    id: "4",
    label: "product",
    category: "t-shirt",
    price: "90",
    offPrice: "80",
    popularity: "5",
    img: product3,
  },
  {
    id: "5",
    label: "product",
    category: "t-shirt",
    price: "120",
    offPrice: "60",
    popularity: "3",
    img: product1,
  },
  {
    id: "6",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product2,
  },
  {
    id: "7",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product3,
  },
  {
    id: "8",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product1,
  },
  {
    id: "9",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product1,
  },
  {
    id: "10",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product3,
  },
  {
    id: "11",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product1,
  },
  {
    id: "12",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "1",
    img: product1,
  },
  {
    id: "13",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product1,
  },
  {
    id: "14",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product2,
  },
  {
    id: "14",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product2,
  },
  {
    id: "15",
    label: "product",
    category: "t-shirt",
    price: "100",
    offPrice: "80",
    popularity: "3",
    img: product3,
  },
]
