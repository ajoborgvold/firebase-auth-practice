import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Welcome!</h1>
            <Link to="/toDoList">Create a new to-do list</Link>
            <Link to="/signIn">Log into your account</Link>
            <Link to="/createAccount">Create a new account</Link>
        </>
    )
}

export default Home