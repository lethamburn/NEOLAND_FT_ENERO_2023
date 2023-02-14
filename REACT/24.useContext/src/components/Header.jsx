import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>Header</h1>
      <h2>{user}</h2>
    </header>
  );
};

export default Header;
