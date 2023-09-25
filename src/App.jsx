import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import CreateAccount from './components/auth/CreateAccount'
import SignIn from './components/auth/SignIn'
import AuthDetails from './components/auth/AuthDetails'
import ToDoList from './pages/ToDoList'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/signIn",
          element: <SignIn />
        },
        {
          path: "/createAccount",
          element: <CreateAccount />
        },
        {
          path: "/toDoList",
          element: <ToDoList />
        },
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App