import React from 'react';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Phone from './components/Phone/Phone';
import Phones from './components/Phones/Phones';
import MainLayout from './layouts/MainLayout';

const App = () => {
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
          element: <Home />
        },
        {
          path: '/phones',
          element: <Phones />,
          loader: () => fetch(`http://localhost:6969/phones`),
        },
        {
          path: '/phones/:id',
          element: <Phone />,
          loader: ({ params }) => fetch(`http://localhost:6969/phones/${params.id}`),
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