import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Home from './components/Home/Home';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        {
          path: '/countries',
          element: <Countries />,
          loader: async () => {
            return fetch('https://restcountries.com/v3.1/all');
          },
        },
        {
          path: '/country/:cca3',
          element: <Country />,
          loader: ({ params }) => {
            return (params.cca3).toString().toLowerCase();
          },
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
