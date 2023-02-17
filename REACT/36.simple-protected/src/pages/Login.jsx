import { useContext, useRef } from "react";
import { UserContext } from "../context/userContext";

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(UserContext);
  return (
    <main>
      <input type="text" placeholder="Username..." ref={inputRef} />
      <button onClick={() => login(inputRef.current.value)}>Login</button>
    </main>
  );
};

export default Login;
