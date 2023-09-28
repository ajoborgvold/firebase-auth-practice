import { Link } from "react-router-dom"

const GetStarted = () => {
    return (
        <div>
            <h2>Are you a regular?</h2>
            <Link to="/account">Go to your account</Link>
            <h2>Are you new here?</h2>
            <Link to="/createAccount">Create a new account</Link>
        </div>
    )
}

export default GetStarted