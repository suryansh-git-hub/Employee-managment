import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/Loader";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

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

    const { theme } = useContext(ThemeContext);

  const [editingEmployee,
       setEditingEmployee] =
       useState(null);

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

const handleSaveEmployee = () => {
  if (
  !name || !email ||  !phone || !department
) {
  alert("Please fill all fields");
  return;
}

if (!email.includes("@")) {
  alert("Email must contain @");
  return;
}

  if (editingEmployee) {

    const updatedEmployees =
      employees.map(
        (employee) =>
          employee.id ===
          editingEmployee.id
            ? {
                ...employee,
                firstName: name,
                email,
                phone,
                company: {
                  department,
                },
              }
            : employee
      );

    setEmployees(
      updatedEmployees
    );

  } else {

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
  }

  setName("");
  setEmail("");
  setPhone("");
  setDepartment("");

  setEditingEmployee(null);

  setIsModalOpen(false);
};

  const handleEdit = (employee) => {
  setEditingEmployee(employee);

  setName(
    employee.firstName
  );

  setEmail(
    employee.email
  );

  setPhone(
    employee.phone
  );

  setDepartment(
    employee.company.department
  );

  setIsModalOpen(true);
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
      <h1  className="
    text-4xl
    font-bold
    mb-2
  ">Employees</h1>

      <p  className="
    text-gray-500
    mb-6
  ">
        Total Employees:
        {filteredEmployees.length}
      </p>
    <div
  className="
    flex flex-col md:flex-row gap-4  mb-6
    items-start  md:items-center "
>
      <input
        type="text"
        placeholder="Search employee"
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
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  ${
    theme === "light"
      ? "bg-white text-gray-800 border-gray-300"
      : "bg-zinc-800 text-white border-zinc-600"
  }
`}
      />

      <select
        value={selectedDepartment}
        onChange={(e) =>
          setSelectedDepartment(
            e.target.value
          )
        }
        className= {`
  border
  rounded-lg
  px-4
  py-2
  w-full
  md:w-60
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  ${
    theme === "light"
      ? "bg-white text-gray-800 border-gray-300"
      : "bg-zinc-800 text-white border-zinc-600"
  }
`}
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
         className="
      bg-green-600
      text-white
      px-5
      py-2
      rounded-lg
      hover:bg-green-700
      transition
      whitespace-nowrap
      cursor-pointer
    "
      >
        Add Employee
      </button>
 </div>
 <div className="overflow-x-auto rounded-xl">
      <Table
        employees={filteredEmployees}
        onDelete={handleDelete}
        onEdit = {handleEdit}
      />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      >
        <div>
          <h2  className="
           text-2xl
    font-bold
    text-center
    mb-6
    text-gray-800
  "> {editingEmployee
    ? "Edit Employee"
    : "Add Employee"}</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
             className= {`
    w-full
    border
    rounded-lg
    px-4
    py-3
    mb-4
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    ${
      theme === "light"
        ? "bg-white text-gray-800 border-gray-300"
        : "bg-zinc-800 text-white border-zinc-600"
    }
  `} />


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
             className={`
    w-full
    border
    rounded-lg
    px-4
    py-3
    mb-4
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    ${
      theme === "light"
        ? "bg-white text-gray-800 border-gray-300"
        : "bg-zinc-800 text-white border-zinc-600"
    }
  `} />

   

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
             className={`
    w-full
    border
    rounded-lg
    px-4
    py-3
    mb-4
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    ${
      theme === "light"
        ? "bg-white text-gray-800 border-gray-300"
        : "bg-zinc-800 text-white border-zinc-600"
    }
  `}   />

     

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
             className= {`
    w-full
    border
    rounded-lg
    px-4
    py-3
    mb-4
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    ${
      theme === "light"
        ? "bg-white text-gray-800 border-gray-300"
        : "bg-zinc-800 text-white border-zinc-600"
    }
  `}
          />

       

          <button
            onClick={
              handleSaveEmployee
            }
            className="w-full
bg-blue-600
hover:bg-blue-700
text-white
font-semibold
py-3
rounded-xl
transition-all
duration-200
cursor-pointer"
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