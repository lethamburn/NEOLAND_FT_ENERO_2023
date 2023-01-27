import "./style.css";

const getAlumnos = async () => {
  const data = await fetch("http://localhost:8080/alumnos");
  const json = await data.json();
  console.log(json);
};

getAlumnos();
