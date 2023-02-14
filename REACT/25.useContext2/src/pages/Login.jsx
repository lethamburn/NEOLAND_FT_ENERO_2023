import { UserContext } from "../context/userContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const inputText = useRef(null);
  const navigate = useNavigate();
  return (
    <main>
      <input type="text" ref={inputText} defaultValue={user} />
      <button
        onClick={() => {
          setUser(inputText.current.value);
          localStorage.setItem("user", inputText.current.value);
          navigate("/content");
        }}
      >
        Login
      </button>
    </main>
  );
};

export default Login;
