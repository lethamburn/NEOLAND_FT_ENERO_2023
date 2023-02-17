import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useAuth();

  return (
    <main>
      <h2>Login</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          login(inputRef.current.value);
        }}
      >
        Login
      </button>
    </main>
  );
};

export default Login;
