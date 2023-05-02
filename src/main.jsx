import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/AllPages/Routes/Routes";
import { Toaster } from 'react-hot-toast';
import AuthProvider from "./components/AllPages/Context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
    <Toaster />
   </AuthProvider>
  </React.StrictMode>
);
