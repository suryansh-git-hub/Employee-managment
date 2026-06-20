import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DashboardLayout({ children }) {

  const {theme} = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
    backgroundColor:
      theme === "light"
        ? "#ffffff"
        : "#1e1e1e",
    color:
      theme === "light"
        ? "#000000"
        : "#ffffff",
    minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;