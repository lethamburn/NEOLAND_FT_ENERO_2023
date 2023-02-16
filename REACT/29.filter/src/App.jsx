import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  //En el fetch almacenamos users y una copia de users llamada filteredUsers
  useEffect(() => {
    fetch("https://63ecd80832a0811723a32563.mockapi.io/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setFilteredUsers(res);
      });
  }, []);

  const filterData = (keyword) => {
    //Filtramos los usuarios originales y los almacenamos en los secundarios, que son filteredUsers, y son los que vamos a pintar.
    //Hacemos esto para siempre tener la referencia de los usuarios completos, que no se están modificando en ningún momento y no tengo que hacer ninguna llamada extra
    const filter = users.filter(
      (user) =>
        user.name.toLowerCase().includes(keyword.toLowerCase()) ||
        user.job.toLowerCase().includes(keyword.toLowerCase()) ||
        user.country.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredUsers(filter);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(ev) => {
          filterData(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          const bebes = users.filter((user) => user.age < 30);
          setFilteredUsers(bebes);
        }}
      >
        Bebes
      </button>
      <button
        onClick={() => {
          const bebes = users.filter((user) => user.age >= 30);
          setFilteredUsers(bebes);
        }}
      >
        Ancianos
      </button>
      {filteredUsers.length ? (
        filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
            <h3>{user.job}</h3>
            <h3>{user.country}</h3>
            <img src={user.avatar} alt={user.name} />
          </div>
        ))
      ) : (
        <h3>No hay usuarios que coincidan con la busqueda</h3>
      )}
    </div>
  );
}

export default App;
