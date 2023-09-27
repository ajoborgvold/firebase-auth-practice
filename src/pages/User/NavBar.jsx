import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Link to="currentList">View current to-do list</Link>
            <Link to="newList">Create a new to-do list</Link>
            <Link to="oldLists">View old to-do lists</Link>
        </>
    )
}

export default NavBar