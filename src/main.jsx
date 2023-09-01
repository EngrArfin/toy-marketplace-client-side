import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Contract from './components/Contract/Contract.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import Blog from './components/Blog/Blog';
import ServiceCard from './components/Services/ServiceCard';
import ToyService from './components/ToyService/ToyService';
import ToyEntry from './components/ToyEntry/ToyEntry';
import Main from './layout/Main';
import AllToyList from './components/AllToyList/AllToyList';
import AddToy from './components/Share/AddToy/AddToy';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      
      {
        path: '/alltoyList',
        element: <AllToyList></AllToyList>,
      },
      {
        path: '/register',
        element: <Register></Register>,
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
        path: '/add',
        element: <AddToy></AddToy>
      },
      {
        path: 'toy/:id',
        element: <ToyService></ToyService>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

      },
      {
        path: '/entry',
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


