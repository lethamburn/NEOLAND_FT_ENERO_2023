import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <main>Welcome {user}</main>;
};

export default Profile;
