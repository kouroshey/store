import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../components/Error404";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error404 />,
        children: [
            { path: '', element: <Home /> }
        ]
    }
])