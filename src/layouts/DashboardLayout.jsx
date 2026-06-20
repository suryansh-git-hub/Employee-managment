import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DashboardLayout({ children }) {

  const {theme} = useContext(ThemeContext);

  return (
    <div
       className={`
        flex min-h-screen
        ${
          theme === "light"
            ? "bg-gray-100 text-gray-900"
            : "bg-zinc-900 text-white"
        }
      `}
    >
      <Sidebar />

      <div
        className="flex-1"
      >
        <Navbar />

        <div
          className="p-6 md:p-8"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;