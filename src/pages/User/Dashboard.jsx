import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Dashboard