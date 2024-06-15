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
import Secret from "../Pages/Shared/secret/Secret";


import Cart from "../Pages/Dashboard/cart/Cart";
import PrivatRouts from "./PrivatRouts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'services',
        element: <PrivatRouts><Services></Services></PrivatRouts>
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
        element: <Projects></Projects>
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
      },
      {
        path: 'secret',
        element: <PrivatRouts><Secret></Secret></PrivatRouts>
      }
    ]
  },

  {
    path: 'dashboard',
    element: <PrivatRouts><Dashboard></Dashboard></PrivatRouts>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      //admin routs
      {
        path:'Allusers',
        element: <Allusers></Allusers>

      }


      //admin routers

     
     
     
     
    ]
  }
]);