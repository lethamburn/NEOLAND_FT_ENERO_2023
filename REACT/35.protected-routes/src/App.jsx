import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<ProtectedLayout />}>
          {/*  A las rutas hijas de elementos con barra no se le puede añadir una barra adicional */}
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
