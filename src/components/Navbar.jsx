import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>Employee Dashboard</h2>

      <div>
        <span>
          Welcome, {user?.name}
        </span>

        <button
          onClick={handleLogout}
          style={{ marginLeft: "15px" }}
        >
          Logout
        </button>
        <button onClick={toggleTheme}>
  {theme === "light"
    ? "Dark Mode"
    : "Light Mode"}
</button>
      </div>
    </div>
  );
}

export default Navbar;