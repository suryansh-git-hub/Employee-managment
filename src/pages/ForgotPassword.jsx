import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] =
    useState("");

  const navigate = useNavigate();

  const handleReset = () => {
    if (!email || !newPassword) {
  alert("Please fill all fields");
  return;
}

if (!email.includes("@")) {
  alert("Email must contain @");
  return;
}
    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const userExists = users.find(
      (user) => user.email === email
    );

    if (!userExists) {
      alert("User not found");
      return;
    }

    const updatedUsers = users.map(
      (user) => {
        if (user.email === email) {
          return {
            ...user,
            password: newPassword,
          };
        }

        return user;
      }
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("Password Updated");

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
          Reset Password
        </h1>

        <p
          className="
            text-center
            text-gray-500
            mb-6
          "
        >
          Enter your email and new password
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
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
        />

        <div className="mt-4">
          <Button
            text="Update Password"
            onClick={handleReset}
          />
        </div>

        <p
          className="
            text-center
            mt-6
            text-gray-600
          "
        >
          Remember your password?

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

export default ForgotPassword;