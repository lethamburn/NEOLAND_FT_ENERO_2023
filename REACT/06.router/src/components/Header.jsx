import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
