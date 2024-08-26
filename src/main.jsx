import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import App from './App.jsx'
import ErrorPage from './error-page.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/news-website/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App/>
  </StrictMode>,
)
