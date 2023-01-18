import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditUser from './components/EditUser';
import Home from './components/Home';
import Users from './components/Users';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/users',
      element: <Users />,
    },
    {
      path: '/users/:id',
      element: <EditUser />,
      loader: ({ params }) => fetch(`http://localhost:6969/users/${params.id}`),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;