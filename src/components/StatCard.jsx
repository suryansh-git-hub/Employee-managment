function StatCard({ title, count }) {
  return (
    <div
      className="
        bg-white
        dark:bg-zinc-800
        rounded-xl
        shadow-md
        p-6
        hover:shadow-lg
        transition
      "
    >
      <h3
        className="
          text-gray-500
          text-lg
          font-medium
        "
      >
        {title}
      </h3>

      <h1
        className="
          text-3xl
          font-bold
          mt-4
          text-gray-900
          dark:text-white
        "
      >
        {count}
      </h1>
    </div>
  );
}

export default StatCard;