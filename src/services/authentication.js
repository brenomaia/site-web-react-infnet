import { redirect } from "react-router-dom";
import data from "./auth.json";

const isAuthenticated = () => {
    const token = localStorage.getItem("token");

    if (token) throw redirect("/")
    return null
};

const handleVerificationProtected = () => {
    const token = localStorage.getItem("session");

    if (!token) throw redirect("/signin")
    return null
};

const signIn = (username, password) => {
    if ((username === data.user) & (password === data.password)) {
        localStorage.setItem("token", "mockToken")
        return { data: { session: "session", user: "breno" }, error: null }
    } else {
        return { error: { message: "Invalid login credentials" } }
    }
}

const signOut = (navigate) => {
    localStorage.removeItem("token")
    localStorage.removeItem("session")

    return navigate("/signin");
}

const signUp = () => {
    console.log("signed up. now use breno/12345 to login")
}

export {
    isAuthenticated,
    handleVerificationProtected,
    signIn,
    signUp,
    signOut
};