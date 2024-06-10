import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import Authproviders from './providers/Authproviders';
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'


const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Authproviders>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </Authproviders>

  </React.StrictMode>,
)
