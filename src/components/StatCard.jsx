
function StatCard({ title, count }) {
  return (
    <div    className="
        bg-white
        dark:bg-zinc-800
        rounded-xl
        shadow-md
        p-6
        w-60
        hover:shadow-lg
        transition
      ">
      <h3 className="
          text-gray-500
          text-xl
          font-medium
        ">{title}</h3>

      <h1   className="
          text-white
text-3xl
font-bold
mt-4
        ">{count}</h1>
    </div>
  );
}

export default StatCard;