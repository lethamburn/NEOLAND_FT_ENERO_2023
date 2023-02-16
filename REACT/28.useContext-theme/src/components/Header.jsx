import { NavLink } from "react-router-dom";
import "./Header.css";

import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <button onClick={() => toggleTheme()}>Change Theme</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
