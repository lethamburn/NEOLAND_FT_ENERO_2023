import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {!user && <NavLink to="/login">Login</NavLink>}
        {user && <NavLink to="/profile">Profile</NavLink>}
        {user && <button onClick={() => logout()}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
