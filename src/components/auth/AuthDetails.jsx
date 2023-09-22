import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebaseSetup'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            user ? setAuthUser(user) : setAuthUser(null)
        })
        return () => listen()
    }, [])

    const signUserOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign out successfull')
            })
    }

    return (
        <div>
            <p>{authUser ? authUser.email : 'No user found'}</p>
            {authUser && <button onClick={signUserOut}>Sign out</button>}
        </div>
    )
}

export default AuthDetails