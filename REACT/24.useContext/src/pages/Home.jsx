import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <main>
      <h1>Main</h1>
      <h2>{user}</h2>
    </main>
  );
};

export default Home;
