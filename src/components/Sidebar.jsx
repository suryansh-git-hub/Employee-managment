import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <h2>EMS</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li style={{ marginTop: "15px" }}>
          <Link to="/employees">Employees</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;