import { useEffect } from "react";

const MountComponent = () => {
  useEffect(() => {
    console.log("Me monto del DOM");

    return () => {
      console.log("Me desmonto del DOM");
    };
  });

  return <h1>Mount Component</h1>;
};

export default MountComponent;
