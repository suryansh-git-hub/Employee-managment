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
    <div>
      <h2>Signup</h2>

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

      <Button
        text="Register"
        onClick={handleSignup}
      />
      <p>
  Already have an account?
  <Link to="/"> Login</Link>
</p>
    </div>
  );
}

export default Signup;