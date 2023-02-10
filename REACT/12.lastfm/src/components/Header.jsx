import "./Header.css";
import albumLogo from "../assets/icons/album.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={albumLogo} alt="CD icon" />
        </div>
        <h1>Neoland.fm</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/artists">Artists</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
