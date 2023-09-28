import { NavLink, useNavigate } from "react-router-dom"
import { signOut, getAuth } from "firebase/auth"

const Header = () => {
    const auth = getAuth()
    const navigate = useNavigate()

    const signUserOut = () => {
        signOut(auth)
        navigate("/")
    }

    return (
        <header>
            <nav>
                <button onClick={signUserOut}>Sign out</button>
            </nav>
        </header>
    )
}

export default Header