import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

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
      </div>
    </div>
  );
}

export default Navbar;