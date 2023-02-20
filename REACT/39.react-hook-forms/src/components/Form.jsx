import { useForm } from "react-hook-form";

const Form = () => {
  //Sacamos estas dos funciones de useForm
  //No confundir la función register con registrarse en una web o algo parecido
  const { handleSubmit, register } = useForm();

  const onFormSubmit = (values) => {
    console.log(values);
  };

  const onFormErrors = (errors) => {
    console.error(errors);
  };

  return (
    <div>
      {/*   Ejecutamos en el submit nuestra función custom onFormSubmit a través de la
      herramienta handleSubmit de react hook form, esta herramienta va a ser
      capaz de leer los valores del formulario */}
      <form onSubmit={handleSubmit(onFormSubmit, onFormErrors)}>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          {...register("username", {
            required: true,
            minLength: 5,
          })}
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          name="password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
