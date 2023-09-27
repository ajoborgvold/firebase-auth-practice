import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseSetup'

const SignIn = () => {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleUserDataChange = e => {
        const { name, value } = e.target
        setUserData(prevUserData => {
            return {...prevUserData, [name]: value}
        })
    }

    const signUserIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, userData.email, userData.password)
            .then(userCredential => {
                console.log(userCredential)
                navigate("/account")
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="form-container">
            <h2>Sign into your account</h2>
            <form className="form-wrapper" onSubmit={e => signUserIn(e)}>
                <label htmlFor="email">Enter your email address</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={userData.email}
                    onChange={e => handleUserDataChange(e)}
                />
                <label htmlFor="password">Enter your password</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={userData.password}
                    onChange={e => handleUserDataChange(e)}
                />
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default SignIn