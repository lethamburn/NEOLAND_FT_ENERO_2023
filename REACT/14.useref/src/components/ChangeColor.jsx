import { useEffect, useRef } from "react";

const ChangeColor = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    console.log(boxRef);
    boxRef.current.style.width = "200px";
    boxRef.current.style.height = "200px";
    boxRef.current.style.backgroundColor = "red";
  }, []);

  return (
    <div>
      <figure ref={boxRef}>Box</figure>

      <button
        onClick={() => {
          boxRef.current.style.backgroundColor = "green";
        }}
      >
        Change
      </button>
    </div>
  );
};

export default ChangeColor;
