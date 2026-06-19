import { useState, useEffect } from "react";

import StatCard from "../components/StatCard";
import Loader from "../components/Loader";

import DashboardLayout from "../layouts/DashboardLayout";



function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching users:", err);
        setLoading(false);
      });
  }, []);
  
  

 if (loading) {
  return <Loader />;
}

  const totalEmployees = users.length;

  const totalMaleEmployees = users.filter(
    (user) => user.gender === "male"
  ).length;

  const totalFemaleEmployees = users.filter(
    (user) => user.gender === "female"
  ).length;

  const totalDepartments = [
    ...new Set(
      users.map((user) => user.company.department)
    ),
  ].length;

  return (
    <DashboardLayout >
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <StatCard
          title="Total Employees"
          count={totalEmployees}
        />

        <StatCard
          title="Total Departments"
          count={totalDepartments}
        />

        <StatCard
          title="Male Employees"
          count={totalMaleEmployees}
        />

        <StatCard
          title="Female Employees"
          count={totalFemaleEmployees}
        />
      </div>
    </div>
    </DashboardLayout>
  );
}

export default Dashboard;