import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import TermsPage from "../src/pages/TermsPage.tsx";
import Notfound from "../src/pages/NotFound.tsx";
// import Welcome from './components/welcome.tsx'
// import Card from './components/card.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Terms",
    element: <TermsPage />,
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
