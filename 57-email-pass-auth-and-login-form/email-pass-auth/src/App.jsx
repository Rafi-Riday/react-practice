import React from 'react';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainLayout from './layouts/MainLayout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          loader: () => redirect('/register'),
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;