import { NavLink } from "react-router-dom"
import { signOut, getAuth } from "firebase/auth"

const Header = () => {
    const auth = getAuth()

    const signUserOut = () => {
        signOut(auth)
    }

    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signIn">Sign in</NavLink>
                <button onClick={signUserOut}>Sign out</button>
            </nav>
        </header>
    )
}

export default Header