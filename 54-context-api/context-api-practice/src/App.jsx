import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Grandpa from './components/Grandpa/Grandpa';
import Main from './layouts/Main/Main';
import './styles/Common.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => redirect('/grandpa'),
        },
        {
          path: '/grandpa',
          element: <Grandpa />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
