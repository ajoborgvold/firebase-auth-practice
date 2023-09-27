import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const auth = getAuth()
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        let unsubscribe
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            currentUser ? setUser(currentUser) : setUser(null)
        })
        return () => unsubscribe && unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }