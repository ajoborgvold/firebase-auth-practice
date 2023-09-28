import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import Dashboard from "./Dashboard"

const Account = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>Welcome back {user.email}</h1>
            <Dashboard />
        </div>
    )
}

export default Account