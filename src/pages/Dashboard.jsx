import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/Loader";
import StatCard from "../components/StatCard";
import employeeApi from "../api/employeeApi";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const response = await employeeApi.get("/employees");

      setEmployees(response.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Dashboard Statistics
  const totalEmployees = employees.length;

  const totalDepartments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  // const totalDesignations = new Set(
  //   employees.map((employee) => employee.designation)
  // ).size;

  // const averageSalary =
  //   employees.length > 0
  //     ? Math.round(
  //         employees.reduce(
  //           (sum, employee) =>
  //             sum + Number(employee.salary || 0),
  //           0
  //         ) / employees.length
  //       )
  //     : 0;

  return (
    <DashboardLayout>
      <div className="p-6">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
            title="Total Employees"
            count={totalEmployees}
          />

          <StatCard
            title="Departments"
            count={totalDepartments}
          />

          {/* <StatCard
            title="Designations"
            count={totalDesignations}
          />

          <StatCard
            title="Average Salary"
            count={`₹${averageSalary}`}
          /> */}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;