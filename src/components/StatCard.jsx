function StatCard({ title, count }) {
  return (
    <div  style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        width: "200px",
      }}>
      <h3>{title}</h3>

      <h1>{count}</h1>
    </div>
  );
}

export default StatCard;