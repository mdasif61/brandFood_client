import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import ChefDetails from "../ChefDetails/ChefDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://b7a10-chef-recipe-hunter-server-side-mdasif61.vercel.app/chef')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path:'/chef/:id',
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://b7a10-chef-recipe-hunter-server-side-mdasif61.vercel.app/chef/${params.id}`)
      }
    ],
  },
]);
export default router;
