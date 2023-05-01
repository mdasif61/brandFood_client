import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])
export default router;