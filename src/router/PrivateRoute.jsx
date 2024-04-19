import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../config/paths";
import { useAuthContext } from "../context/AuthContext";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
}
