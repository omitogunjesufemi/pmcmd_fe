import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
    const { user, isCheckingSession } = useAuth();

    if (isCheckingSession) {
        return (
            <div>Checking authentication...</div>
        );
    }

    if (!user) {
        return (
            <Navigate to="/login" replace />
        );
    }

    return <Outlet />
}