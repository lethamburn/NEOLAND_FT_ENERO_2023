import { useEffect, useRef } from "react";

const Home = () => {
  const mainContainer = useRef(null);

  useEffect(() => {});
  return (
    <main ref={mainContainer}>
      <h1>Home</h1>
      <img src="https://picsum.photos/536/354" />
    </main>
  );
};

export default Home;
