import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/MainLayout';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productsAndCartLoader, homeLoader } from './loaders/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: homeLoader,
      },
      {
        path: '/shop',
        loader: productsAndCartLoader,
        element: <Shop />,
      },
      {
        path: '/orders',
        loader: productsAndCartLoader,
        element: <Orders />,
      },
      {
        path: '/inventory',
        element: <Inventory />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '*',
        element: <h3>Error, not found that page :(</h3>
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
