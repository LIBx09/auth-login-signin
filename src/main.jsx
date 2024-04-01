import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './components/providers/AuthProviders';
import Orders from './components/Orders';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/Register",
        element: <Register/>
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders/></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} /> 
    </AuthProviders>
  </React.StrictMode>,
)
