import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Antonio");
  return (
    <div>
      <h2>{name}</h2>
      <button
        onClick={() =>
          name === "Alberto" ? setName("Antonio") : setName("Alberto")
        }
      >
        Change
      </button>
    </div>
  );
};

export default SimpleState;
