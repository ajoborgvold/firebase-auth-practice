import { useState, useContext } from 'react'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import CreateAccount from './components/auth/CreateAccount'
import SignIn from './components/auth/SignIn'
import AuthDetails from './components/auth/AuthDetails'
import ToDoList from './pages/ToDoList'
import NewList from './pages/User/NewList'
import OldLists from './pages/User/OldLists'
import CurrentList from './pages/User/CurrentList'
import Account from './pages/User/Account'
import GetStarted from './pages/GetStarted'

import { AuthContext } from './context/AuthContext'


function App() {
  const { user } = useContext(AuthContext)

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
          path: "/getStarted",
          element: <GetStarted />
        },
        {
          path: "/createAccount",
          element: <CreateAccount />
        },
        {
          path: "/signIn",
          element: <SignIn />
        },
        {
          path: "/account",
          element: <Account />,
          loader: async () => {
            if (!user) {
              throw redirect("/signIn")
            }
            return null
          },
          children: [
            {
              path: "currentList",
              element: <CurrentList />
            },
            {
              path: "newList",
              element: <NewList /> 
            },
            {
              path: "oldLists",
              element: <OldLists />
            }
          ]
        },
      ]
    }
  ])


  return (
      <RouterProvider router={router} />
  )
}

export default App