import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import authApi from "../api/authApi";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [role, setRole] = useState("Employee");

// const handleSignup = async () => {
//   if (!name || !email || !password) {
//     alert("Please fill all fields");
//     return;
//   }

//   if (!email.includes("@")) {
//     alert("Email must contain @");
//     return;
//   }

//   try {
//     await authApi.post("/register", {
//       name,
//       email,
//       password,

//       // Required by your backend
//       role: "Employee",
//       age: 18,
//       phoneNumber: "9999999999",
//     });

//     alert("Registration Successful");

//     navigate("/");

//   } catch (error) {
//     console.log(error);

//     alert(
//       error.response?.data?.message ||
//       "Registration Failed"
//     );
//   }
// };
 
const handleSignup = async () => {
  if (
    !name ||
    !email ||
    !password ||
    !age ||
    !phoneNumber ||
    !role
  ) {
    alert("Please fill all fields");
    return;
  }

  if (!email.includes("@")) {
    alert("Email must contain @");
    return;
  }

  try {
    const response = await authApi.post("/register", {
      name,
      email,
      password,
      age: Number(age),
      phoneNumber,
      role,
    });

    alert(response.data.message);

    navigate("/");

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );
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

      <Input
  type="number"
  placeholder="Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>

        <Input
  type="text"
  placeholder="Phone Number"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
/>

          <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="
    w-full
    border
    rounded-lg
    px-4
    py-3
    mt-4
  "
>
  <option value="Employee">Employee</option>
  <option value="Admin">Admin</option>
</select>

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