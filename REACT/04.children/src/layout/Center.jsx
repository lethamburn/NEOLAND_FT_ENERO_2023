import "./Center.css";

//Gracias a children podemos indicar que en un futuro le pasaremos entre la etiqueta de apertura y etiqueta de cierre de nuestro componente un contenido
const Center = ({ children }) => {
  return <div className="center-layout">{children}</div>;
};

export default Center;
