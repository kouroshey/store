import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Error404 from '../components/Error404';
import Home from '../_root/pages/Home';
import ProductDetails from '../_root/pages/ProductDetails';
import Dashboard from '../_root/pages/Dashboard';
import Shop from '../_root/pages/Shop';
import Cart from '../_root/pages/Cart';
import AuthLayout from '../_auth/AuthLayout';
import Login from '../_auth/forms/Login';
import Layout from '../_root/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { path: '', element: <Home /> },
      { path: '/product-details', element: <ProductDetails /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/shop', element: <Shop />, },
      { path: "/shop/cart", element: <Cart /> },
    ],
  },
  {
    element: <AuthLayout />,
    path: "/",
    errorElement: <Error404 />,
    children: [
      { path: "/login", element: <Login /> },
    ]
  }
]);
