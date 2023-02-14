import Component2 from "./Component2";

const Component1 = ({ saludo }) => {
  return (
    <div>
      <h2>Component 1</h2>
      <Component2 saludo={saludo} />
    </div>
  );
};

export default Component1;
