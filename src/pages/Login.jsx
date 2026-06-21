import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

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
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
      "
    >
      <div
        className="
          bg-white
          p-8
          rounded-2xl
          shadow-lg
          w-full
          max-w-md
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-center
            mb-2
          "
        >
          Employee Dashboard
        </h1>

        <p
          className="
            text-center
            text-gray-500
            mb-6
          "
        >
          Login to your account
        </p>

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

        <div className="mt-4">
          <Button
            text="Login"
            onClick={handleLogin}
          />
        </div>

        <p
          className="
            text-center
            mt-6
            text-gray-600
          "
        >
          Don't have an account?
          <Link
            to="/signup"
            className="
              text-blue-600
              font-medium
              ml-1
              hover:underline
            "
          >
            Sign Up
          </Link>
        </p>

        <div className="text-center mt-3">
          <Link
            to="/forgot-password"
            className="
              text-blue-600
              hover:underline
            "
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;