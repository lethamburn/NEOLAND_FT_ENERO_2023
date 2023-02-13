import { useState } from "react";
import Name from "./Name";
console.log("Renderizando Form");
const Form = () => {
  const [name, setName] = useState("Peter");
  return (
    <div>
      <Name name={name} />
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
    </div>
  );
};

export default Form;
