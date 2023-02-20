import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Services from "../Services/Services/Services";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/services',
        element: <Services></Services>
    }
])