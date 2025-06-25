import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as postsLoader } from './routes/Posts'
import NewPost, { action as newPostAction } from './routes/NewPost'
import ErrorPage from './routes/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostDetails, { loader as postDetailsLoader }from './routes/PostDetails'
import RouteLayout from './routes/RouteLayout'
import './index.css'

const router = createBrowserRouter ([
  { path: '/',
    element: <RouteLayout />,
    children: [
      { path: '/',
        element: <Posts />,
        loader: postsLoader,
        errorElement: <ErrorPage />,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
