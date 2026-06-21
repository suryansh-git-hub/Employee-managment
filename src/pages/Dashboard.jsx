import { useState, useEffect } from "react";
//import { FaUsers } from "react-icons/fa";


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
      <h1 className ="text-4xl
font-bold
mb-8
">Dashboard</h1>

      <div
         className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-4
    gap-6
    mt-6
  "
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