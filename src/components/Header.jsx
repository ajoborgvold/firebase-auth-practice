import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signIn">Sign in</NavLink>
            </nav>
        </header>
    )
}

export default Header