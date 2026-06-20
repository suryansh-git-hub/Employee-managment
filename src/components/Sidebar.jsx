import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Sidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        backgroundColor:
          theme === "light"
            ? "#f4f4f4"
            : "#2c2c2c",
        color:
          theme === "light"
            ? "#000"
            : "#fff",
        padding: "20px",
      }}
    >
      <h2>EMS</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li style={{ marginTop: "15px" }}>
          <Link to="/employees">
            Employees
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;