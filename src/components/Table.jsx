function Table({ employees,onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img
                src={employee.image}
                alt={employee.firstName}
                width="50"
              />
            </td>

            <td>
              {employee.firstName} {employee.lastName}
            </td>

            <td>{employee.email}</td>

            <td>
              {employee.company.department}
            </td>

            <td>{employee.phone}</td>
            <td><button onClick={() => onDelete(employee.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;