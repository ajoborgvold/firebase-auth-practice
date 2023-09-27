import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Account = () => {
    const { user } = useContext(AuthContext)
    const [greeting, setGreeting] = useState('Dav')
    const navigate = useNavigate()

    useEffect(() => {
        !user ? navigate("/") : setGreeting(`Welcome back, ${user.email}!`)
    }, [])

    return (
        <h1>
            {greeting}
        </h1>
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