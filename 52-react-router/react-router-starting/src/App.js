import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'products', element: <Products /> },
        {
          path: 'friends',
          element: <Friends />,
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
        },
        {
          path: 'friends/:id',
          element: <FriendDetails />,
          loader: async ({ params }) => {
            return params.id;
          },
        },
        {
          path: 'posts',
          element: <Posts />,
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`);
          },
        },
        {
          path: 'posts/:id',
          element: <PostDetails />,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
          },
        },
      ]
    },
    { path: '*', element: <div>This route not found :(</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
