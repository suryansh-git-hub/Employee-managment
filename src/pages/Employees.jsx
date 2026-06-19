import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/Loader";
import Table from "../components/Table"

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment,
       setSelectedDepartment] =
       useState("All");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.users);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  const departments = [
  "All",
  ...new Set(
    employees.map(
      (employee) =>
        employee.company.department
    )
  ),
];

 const filteredEmployees =
  employees.filter((employee) => {
    const fullName =
      `${employee.firstName} ${employee.lastName}`
        .toLowerCase();

    const matchesSearch =
      fullName.includes(
        searchTerm.toLowerCase()
      );

    const matchesDepartment =
      selectedDepartment === "All"
        ? true
        : employee.company.department ===
          selectedDepartment;

    return (
      matchesSearch &&
      matchesDepartment
    );
  });
  
  return (
    <DashboardLayout>
      <h1>Employees</h1>

      <p>Total Employees: {employees.length}</p>
      <input  type="text" placeholder="Search employee"
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
/>

<select
  value={selectedDepartment}
  onChange={(e) =>
    setSelectedDepartment(
      e.target.value
    )
  }
>
  {departments.map((dept) => (
    <option
      key={dept}
      value={dept}
    >
      {dept}
    </option>
  ))}
</select>
      <Table employees={filteredEmployees} />
    </DashboardLayout>
  );
}

export default Employees;