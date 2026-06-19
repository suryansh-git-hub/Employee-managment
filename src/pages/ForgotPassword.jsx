import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] =
    useState("");

  const navigate = useNavigate();

  const handleReset = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) ||
      [];

    const updatedUsers = users.map((user) => {
      if (user.email === email) {
        return {
          ...user,
          password: newPassword,
        };
      }

      return user;
    });

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("Password Updated");

    navigate("/");
  };

  return (
    <div>
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) =>
          setNewPassword(e.target.value)
        }
      />

      <button onClick={handleReset}>
        Update Password
      </button>
    </div>
  );
}

export default ForgotPassword;