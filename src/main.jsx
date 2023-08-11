import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Product from './components/Product/Product.jsx';
import Contract from './components/Contract/Contract.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import Blog from './components/Blog/Blog';
import ServiceCard from './components/Services/ServiceCard';
import ToyService from './components/ToyService/ToyService';
import ToyEntry from './components/ToyEntry/ToyEntry';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/home',
        element:<Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/product',
        element: <Product></Product>,
      },
      {
        path: '/contract',
        element: <Contract></Contract>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      
      {
        path: '/produc',
        element: <ServiceCard></ServiceCard>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'toy/:id',
        element: <ToyService></ToyService>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

      },
      {
        path: 'entry',
        element: <ToyEntry></ToyEntry>

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

//const storage = getStorage(app);
