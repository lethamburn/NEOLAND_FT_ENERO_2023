import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
