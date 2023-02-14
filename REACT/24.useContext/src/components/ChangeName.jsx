import { useContext } from "react";
import { UserContext } from "../context/userContext";

const ChangeName = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <input
      type="text"
      value={user}
      onChange={(ev) => setUser(ev.target.value)}
    />
  );
};

export default ChangeName;
