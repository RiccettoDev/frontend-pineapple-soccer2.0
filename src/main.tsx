import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import Profile from './pages/Profile.tsx'
import Players from './pages/Players.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/players',
        element: <Players />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
