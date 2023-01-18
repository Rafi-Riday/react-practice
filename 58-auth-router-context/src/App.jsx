import React from "react";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/routes/PrivateRoute";
import MainLayout from "./layouts/MainLayout";
import Orders from './components/Orders/Orders';
import TestLayout from "./layouts/TestLayout";
import Category from "./components/Category/Category";
import CategoryID from "./components/CategoryID/CategoryID";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          loader: () => redirect('/home'),
        },
        {
          path: '/home',
          element: <PrivateRoute><Home /></PrivateRoute>,
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders /></PrivateRoute>,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />
        },
      ],
    },
    {
      path: '/category',
      element: <TestLayout />,
      children: [
        {
          path: '/category',
          element: <Category />,
        },
        {
          path: '/category/:id',
          element: <CategoryID />,
          loader: ({ params }) => params.id,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
