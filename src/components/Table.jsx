import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Table({ employees, onDelete, onEdit }) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="overflow-x-auto mt-6">
      <table className= {`
    w-full
    rounded-xl
    shadow-md
    overflow-hidden
    ${
      theme === "light"
        ? "bg-white text-gray-800"
        : "bg-zinc-800 text-white"
    }
  `}>
        <thead className= { theme === "light"
      ? "bg-gray-100 text-gray-800"
      : "bg-zinc-700 text-white"
  }>
          <tr  >
            <th className="px-4 py-3 text-left">Image</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Department</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr
               key={employee.id}
  className={`
    border-t
    transition
    ${
      theme === "light"
        ? "border-gray-200 hover:bg-gray-50"
        : "border-zinc-700 hover:bg-zinc-700"
    }
  `}
            >
              <td className="px-4 py-3">
                <img
                  src={employee.image}
                  alt={employee.firstName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>

              <td className="px-4 py-3">
                {employee.firstName} {employee.lastName}
              </td>

              <td className="px-4 py-3">
                {employee.email}
              </td>

              <td className="px-4 py-3">
                {employee.company.department}
              </td>

              <td className="px-4 py-3">
                {employee.phone}
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() =>
                      onEdit(employee)
                    }
                    className="
                      px-3 py-1
                      bg-blue-500
                      text-white
                      rounded-md
                      hover:bg-blue-600
                      transition
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(employee.id)
                    }
                    className="
                      px-3 py-1
                      bg-red-500
                      text-white
                      rounded-md
                      hover:bg-red-600
                      transition
                    "
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;