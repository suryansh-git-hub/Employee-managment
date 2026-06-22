import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DashboardLayout({ children }) {

  const {theme} = useContext(ThemeContext);

  return (
    <div
        className={`
    flex
    h-screen
    overflow-hidden
    ${
      theme === "light"
        ? "bg-gray-100 text-gray-900"
        : "bg-zinc-900 text-white"
    }
  `}
    >
      <Sidebar />

      <div
        className="flex-1 flex
    flex-col
    overflow-hidden"
      >
        <Navbar />

        <div
          className=" flex-1
    overflow-y-auto
    p-6
    md:p-8"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;