import { redirect } from "react-router-dom";

async function loader() {
    if (!user) {
        throw redirect("/signIn")
    }
    return null
}

export default loader