import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        src="https://res.cloudinary.com/dfnh5hecu/image/upload/v1676393103/NASA%20API/NASA_logo.svg_kvzcub.png"
        alt="Nasa Logo"
        loading="lazy"
      />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/media">Media</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
