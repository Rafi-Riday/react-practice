import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => redirect('/home'),
        },
        {
          path: '/home',
          element: <Home />,
          loader: () => fetch('tshirts.json'),
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '*',
          element: <h2>Page not Found :(</h2>
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
