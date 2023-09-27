import { Link, Outlet } from "react-router-dom"
import { ref, set } from 'firebase/database'
import { database } from "../firebaseSetup"
import NavBar from "./User/NavBar"

const ToDoList = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default ToDoList