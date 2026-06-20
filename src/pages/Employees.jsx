import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/Loader";
import Table from "../components/Table";
import Modal from "../components/Modal";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] =
    useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleAddEmployee = () => {
    const newEmployee = {
      id: Date.now(),
      firstName: name,
      lastName: "",
      email,
      phone,
      image:
        "https://dummyjson.com/icon/emilys/128",
      company: {
        department,
      },
    };

    setEmployees([
      newEmployee,
      ...employees,
    ]);

    setName("");
    setEmail("");
    setPhone("");
    setDepartment("");

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
  setEmployees(
    employees.filter(
      (employee) =>
        employee.id !== id
    )
  );
};

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

      <p>
        Total Employees:
        {filteredEmployees.length}
      </p>

      <input
        type="text"
        placeholder="Search employee"
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

      <button
        onClick={() =>
          setIsModalOpen(true)
        }
      >
        Add Employee
      </button>

      <Table
        employees={filteredEmployees}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      >
        <div>
          <h2>Add Employee</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <br />
          <br />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
          />

          <br />
          <br />

          <button
            onClick={
              handleAddEmployee
            }
          >
            Add Employee
          </button>
        </div>
      </Modal>
    </DashboardLayout>
  );
}

export default Employees;