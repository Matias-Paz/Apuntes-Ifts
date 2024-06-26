import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "../config/paths";
import { useAuthContext } from "../context/AuthContext";

export default function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
