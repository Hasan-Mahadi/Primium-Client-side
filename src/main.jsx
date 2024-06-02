import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import Authproviders from './providers/Authproviders';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Authproviders>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </Authproviders>




  </React.StrictMode>,
)
