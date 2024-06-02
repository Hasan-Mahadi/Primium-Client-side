import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Donate from "../Pages/Donate";

import Products from "../Pages/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'services',
          element: <Services></Services>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'projects',
          element:<Projects></Projects>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: 'donats',
          element: <Donate></Donate>

        },
         
        {
          path: 'logins',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'prodcust',
          element: <Products></Products>
        }
      ]
    },
  ]);