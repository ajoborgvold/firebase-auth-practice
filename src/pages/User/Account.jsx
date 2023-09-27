import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Account = () => {
    const { user } = useContext(AuthContext)

    return (
        <h1>{`Welcome back, ${user.email}!`}</h1>
    )
}

export default Account


// import { ref, set } from 'firebase/database'
// import { database } from "../firebaseSetup"

// const ToDoList = () => {
//     return (
//         <div>
//             <NavBar />
//             <Outlet />
//         </div>
//     )
// }

// export default ToDoList