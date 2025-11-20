import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../src/pages/HomePage.tsx";
import Product from "../src/pages/Product.tsx";
import TermsPage from './pages/TermsPage.tsx';

import Notfound from "../src/pages/NotFound.tsx";
import ProductDetail from "../src/pages/ProductDetail.tsx";
import RHFPage from "../src/pages/RHFPage.tsx";


// import Welcome from './components/welcome.tsx'
// import Card from './components/card.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [

      
      {
        index: true,
        path: "HomePage",
        element: <HomePage />,
      },
      {
        path: "Product",
        element: <Product />,
        
      },
      {
        path: "Product/:NameProduct",
        element: <ProductDetail />,
      },
      {
        path: "Terms",
        element: <TermsPage />,
      },
      {
        path: "RHFPage",
        element: <RHFPage />,
      },
    ]
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode > 
    <RouterProvider router={router} />
  </StrictMode>
)
