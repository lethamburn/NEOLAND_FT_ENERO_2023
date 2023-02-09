import { useState, useEffect } from "react";

const SimpleEffect = () => {
  const [saludo, setSaludo] = useState("Hola");

  useEffect(() => {
    setTimeout(() => {
      setSaludo("Adios");
    }, 3000);
  }, []);

  return (
    <div>
      <h2>{saludo}</h2>
    </div>
  );
};

export default SimpleEffect;
