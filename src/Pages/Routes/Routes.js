import { createBrowserRouter } from "react-router-dom";
import CRM from "../CRM/CRM/CRM";
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
    },
    {
        path: '/crm',
        element: <CRM></CRM>
    }
])