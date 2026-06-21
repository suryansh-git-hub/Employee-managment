export default function Input({
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        mb-4
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
  );
}