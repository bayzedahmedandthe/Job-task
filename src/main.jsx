import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layoutes/Layout';
import Register from './Components/Register';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Components/AuthProvider';
import HomePage from './Components/HomePage';
import PrivetRoute from './Components/PrivetRoute';
// import PrivetRoute from './Components/PrivetRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <div>Error page here</div>,
    children: [
      {
        path: "/",
        element:  <PrivetRoute><HomePage></HomePage></PrivetRoute>
      },
      {
        path: "/register",
        element: <Register></Register>
      }, 
      {
        path: "/login", 
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
