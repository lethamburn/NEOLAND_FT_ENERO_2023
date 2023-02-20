import { useState } from "react";

const Form = () => {
  //Estado inicial del formulario con las claves vacías
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  //Tenemos un estado para controlar el error
  const [error, setError] = useState(null);
  //Creamos una función que se ejecutará en el onsubmit del formulario
  const handleSubmit = (ev) => {
    //Prevenimos el comportamiento por defecto del submit
    ev.preventDefault();
    //Si no tienes password o username seteamos el error con un string
    if (!user.password || !user.username) {
      setError("Formulario incompleto");
      //Y si lo tienes sacamos el usuario por consola y seteamos el error a nulo
    } else {
      setError(null);
      console.log(user);
    }
  };
  return (
    <div>
      {/* LE ESTAMOS DICIENDO AL FORMULARIO QUE AL HACER SUBMIT EJECUTE LA FUNCION HANDLESUBMIT, LE PASAMOS EL EVENTO DEL ONSUBMIT A LA FUNCION Y LE DECIMOS QUE PREVENGA EL COMPORTAMIENTO POR DEFECTO */}
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(ev) => setUser({ ...user, username: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          value={user.password}
          onChange={(ev) => setUser({ ...user, password: ev.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {error !== null && <h2>{error}</h2>}
    </div>
  );
};

export default Form;
