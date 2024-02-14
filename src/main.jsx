import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout/RootLayout.jsx';
import OneMovie,{loader as OneMovieLoader} from './components/routes/MoviePage/OneMovie.jsx';
import store from './app/store'
import { Provider } from 'react-redux'
import AllMovies, { loader as MovieLoader }  from './components/routes/AllMovies/AllMovies.jsx';
import AddMovie from './components/routes/MoviePage/AddMovie.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/movies",
        element: <AllMovies />,
        loader : MovieLoader
      },
      {
        path: "/movies/:slug",
        element: <OneMovie />,
        loader : OneMovieLoader
      },
      {
        path: "/movies/add-movie",
        element: <AddMovie />,
      },
    
    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
