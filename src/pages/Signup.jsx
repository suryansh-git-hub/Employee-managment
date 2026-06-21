import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
 const newUser = {
    name,
    email,
    password,
  };
    const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(
    (user) => user.email === email
  );

  if (userExists) {
    alert("User already exists");
    return;
  }

  users.push(newUser);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  alert("Registration Successful");

  navigate("/");
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
        Create Account
      </h1>

      <p
        className="
          text-center
          text-gray-500
          mb-6
        "
      >
        Register to continue
      </p>

      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

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
          text="Register"
          onClick={handleSignup}
        />
      </div>

      <p
        className="
          text-center
          mt-6
          text-gray-600
        "
      >
        Already have an account?

        <Link
          to="/"
          className="
            text-blue-600
            font-medium
            ml-1
            hover:underline
          "
        >
          Login
        </Link>
      </p>
    </div>
  </div>
  );
}

export default Signup;