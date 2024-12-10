import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
    const token = localStorage.getItem("session");

    return token ? <Outlet /> : <Navigate to="/signin" />
}

export default Protected;