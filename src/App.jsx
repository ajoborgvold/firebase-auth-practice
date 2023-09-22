import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateAccount from './components/auth/CreateAccount'
import SignIn from './components/auth/SignIn'
import AuthDetails from './components/auth/AuthDetails'

function App() {
  return (
    <>
      <CreateAccount />
      <SignIn />
      <AuthDetails />
    </>
  )
}

export default App