import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/640px-Star_wars_1977_us.svg.png"
          alt="Star Wars Logo"
        />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
