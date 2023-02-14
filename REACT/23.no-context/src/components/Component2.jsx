import Component3 from "./Component3";

const Component2 = ({ saludo }) => {
  return (
    <div>
      <h2>Component 2</h2>
      <Component3 saludo={saludo} />
    </div>
  );
};

export default Component2;
