import { useEffect, useState, useContext } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/Loader";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { ThemeContext } from "../context/ThemeContext";
import employeeApi from "../api/employeeApi";

function Employees() {
  const { theme } = useContext(ThemeContext);

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [editingEmployee, setEditingEmployee] =
    useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] =
    useState("");
  // const [designation, setDesignation] =
  //   useState("");
  // const [salary, setSalary] = useState("");

 

  // ===============================
  // Fetch Employees
  // ===============================

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const response =
        await employeeApi.get("/employees");

      setEmployees(response.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ===============================
  // Save Employee
  // ===============================

 const handleSaveEmployee = async () => {
  if (!name || !email || !phone || !department) {
    alert("Please fill all fields");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email");
    return;
  }

  try {

    // --------------------------
    // UPDATE EMPLOYEE
    // --------------------------
    if (editingEmployee) {

      await employeeApi.put(
        `/employees/${editingEmployee._id}`,
        {
          fullName: name,
          email: email,
          phoneNumber: phone,
          department: department,
          designation: "Employee",
          salary: 0,
        }
      );

      alert("Employee Updated");

    }

    // --------------------------
    // ADD EMPLOYEE
    // --------------------------
    else {

      const formData = new FormData();

      formData.append("fullName", name);
      formData.append("email", email);
      formData.append("phoneNumber", phone);
      formData.append("department", department);
      formData.append("designation", "Employee");
      formData.append("salary", 0);

      // If you add image upload later
      // if(profileImage){
      //   formData.append("profileImage", profileImage);
      // }

      await employeeApi.post(
        "/employees",
        formData
      );

      alert("Employee Added");
    }

    // Refresh employee list
    fetchEmployees();

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setDepartment("");

    setEditingEmployee(null);

    setIsModalOpen(false);

  } catch (error) {

    console.log(error);

    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong");
    }
  }
};
  // ===============================
  // Edit Employee
  // ===============================

  const handleEdit = (employee) => {
    setEditingEmployee(employee);

    setName(employee.fullName);
    setEmail(employee.email);
    setPhone(employee.phoneNumber);
    setDepartment(employee.department);
    // setDesignation(employee.designation);
    // setSalary(employee.salary);

    setIsModalOpen(true);
  };

  // ===============================
  // Delete Employee
  // ===============================

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this employee?"
      );

    if (!confirmDelete) return;

    try {
      await employeeApi.delete(
        `/employees/${id}`
      );

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  // ===============================
  // Search & Filter
  // ===============================

  const filteredEmployees =
    employees.filter((employee) => {
      const matchesSearch =
        employee.fullName
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesDepartment =
        selectedDepartment === "All"
          ? true
          : employee.department ===
            selectedDepartment;

      return (
        matchesSearch &&
        matchesDepartment
      );
    });

  const departments = [
    "All",
    ...new Set(
      employees.map(
        (employee) =>
          employee.department
      )
    ),
  ];

  if (loading) {
    return <Loader />;
  }
  return (
  <DashboardLayout>
    <h1 className="text-4xl font-bold mb-2">
      Employees
    </h1>

    <p className="text-gray-500 mb-6">
      Total Employees: {filteredEmployees.length}
    </p>

    <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">

      <input
        type="text"
        placeholder="Search employee..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className={`
          border
          rounded-lg
          px-4
          py-2
          w-full
          md:w-72
          ${
            theme === "light"
              ? "bg-white border-gray-300 text-black"
              : "bg-zinc-800 border-zinc-700 text-white"
          }
        `}
      />

      <select
        value={selectedDepartment}
        onChange={(e) =>
          setSelectedDepartment(e.target.value)
        }
        className={`
          border
          rounded-lg
          px-4
          py-2
          w-full
          md:w-60
          ${
            theme === "light"
              ? "bg-white border-gray-300"
              : "bg-zinc-800 border-zinc-700"
          }
        `}
      >
        {departments.map((dept) => (
          <option key={dept}>
            {dept}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          setEditingEmployee(null);

          setName("");
          setEmail("");
          setPhone("");
          setDepartment("");
          // setDesignation("");
          // setSalary("");
          // setProfileImage(null);

          setIsModalOpen(true);
        }}
        className="
          bg-green-600
          hover:bg-green-700
          text-white
          px-5
          py-2
          rounded-lg
        "
      >
        Add Employee
      </button>
    </div>

    <Table
      employees={filteredEmployees}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />

    <Modal
      isOpen={isModalOpen}
      onClose={() =>
        setIsModalOpen(false)
      }
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {editingEmployee
          ? "Edit Employee"
          : "Add Employee"}
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
          className="w-full border rounded-lg px-4 py-3"
        />


        <button
          onClick={handleSaveEmployee}
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-lg
            font-semibold
          "
        >
          {editingEmployee
            ? "Update Employee"
            : "Add Employee"}
        </button>

      </div>
    </Modal>

  </DashboardLayout>
);

}

export default Employees;