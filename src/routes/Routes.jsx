import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Home";
import About from "../Component/About";
import Class from "../Component/Class";
import Contact from "../Component/Contact";



const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/class",
                element:<Class></Class>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    }
]);




export default routes
