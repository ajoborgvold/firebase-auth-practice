import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

import { useEffect, useState } from 'react'
import { auth } from '../../firebaseSetup'

const CreateAccount = () => {
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        repeatedPassword: ''
    })
    const [doesPasswordMatch, setDoesPasswordMatch] = useState(false)

    useEffect(() => {
        newUser.password === newUser.repeatedPassword ? setDoesPasswordMatch(true) : setDoesPasswordMatch(false)
    }, [newUser.password, newUser.repeatedPassword])

    const handleNewUserChange = e => {
        const { name, value } = e.target
        setNewUser(prevNewUser => {
            return {...prevNewUser, [name]: value}
        })
    }

    const createNewUser = (e) => {
        e.preventDefault()
        doesPasswordMatch ? createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
            .then(userCredential => {
                console.log(userCredential)
            }).catch(error => {
                console.log(error)
            }) : console.log('Passwords do not match')
    }

    return (
        <div className="form-container">
            <h2>Create a new account</h2>
            <form className="form-wrapper" onSubmit={e => createNewUser(e)}>
                <label htmlFor="email">Enter an email address</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={newUser.email}
                    onChange={e => handleNewUserChange(e)}
                />
                <label htmlFor="password">Enter a password</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter a password"
                    value={newUser.password}
                    onChange={e => handleNewUserChange(e)}
                />
                <label htmlFor="repeatedPassword">Repeat your password</label>
                <input
                    type="password"
                    name="repeatedPassword"
                    id="repeatedPassword"
                    placeholder="Repeat the password"
                    value={newUser.repeatedPassword}
                    onChange={e => handleNewUserChange(e)}    
                />
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default CreateAccount