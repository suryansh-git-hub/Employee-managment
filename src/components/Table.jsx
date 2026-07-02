import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Table({ employees, onDelete, onEdit }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="overflow-x-auto mt-6">
      <table
        className={`
          w-full
          rounded-xl
          shadow-md
          overflow-hidden
          ${
            theme === "light"
              ? "bg-white text-gray-800"
              : "bg-zinc-800 text-white"
          }
        `}
      >
        <thead
          className={
            theme === "light"
              ? "bg-gray-100 text-gray-800"
              : "bg-zinc-700 text-white"
          }
        >
          <tr>
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
              key={employee._id}
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
  {employee.profileImage ? (
    <img
      src={employee.profileImage}
      alt={employee.fullName}
      className="w-12 h-12 rounded-full object-cover"
    />
  ) : (
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-sm">
      👤
    </div>
  )}
</td>

              <td className="px-4 py-3">
                {employee.fullName}
              </td>

              <td className="px-4 py-3">
                {employee.email}
              </td>

              <td className="px-4 py-3">
                {employee.department}
              </td>

              <td className="px-4 py-3">
                {employee.phoneNumber}
              </td>

              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(employee)}
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
                    onClick={() => onDelete(employee._id)}
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