import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (user) {
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    navigate("/dashboard");
  } else {
    alert("Invalid Credentials");
  }
};

  return (
    <div>
      <h2>Login</h2>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <Button
        text="Login"
        onClick={handleLogin}
      />
      <p>
  Don't have an account?
  <Link to="/signup"> Sign Up</Link>
</p>
          <Link to = "/forgot-password">
          Forgot Password ?</Link>
    </div>
  );
}

export default Login;