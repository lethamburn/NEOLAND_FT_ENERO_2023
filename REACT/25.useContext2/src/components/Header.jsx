import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      {user !== null && <NavLink to="/content">Content</NavLink>}
      {user !== null && <button onClick={() => logout()}>Logout</button>}
      {user !== null ? <h2>Welcome {user}</h2> : <h2>Logueate</h2>}
    </header>
  );
};

export default Header;
