import { useEffect, useState } from "react";

const Depend = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Me lanzo");
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Depend;
