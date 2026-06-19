import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/Loader";
import Table from "../components/Table"

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <DashboardLayout>
      <h1>Employees</h1>

      <p>Total Employees: {employees.length}</p>
      <Table employees={employees} />
    </DashboardLayout>
  );
}

export default Employees;