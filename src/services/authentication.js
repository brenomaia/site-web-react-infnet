import { redirect } from "react-router-dom";

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

const signIn = async (username, password, supabase) => {
    return await supabase.auth.signInWithPassword({email: username, password: password});
} 

const signUp = async (username, password, supabase) => {
    return await supabase.auth.signUp({email: username, password: password});
};

const signOut = async (supabase, navigate) => {
    localStorage.removeItem("session");
    localStorage.removeItem("user");

    supabase.auth.signOut();

    return navigate("/signin");
}

export {
    isAuthenticated,
    handleVerificationProtected,
    signIn,
    signUp,
    signOut
};