import { redirect } from "react-router-dom";

const loader = async () => {
    const isLoggedIn = true

    if (!isLoggedIn) {
        redirect("/signIn")
    }
    return null
}

export { loader }