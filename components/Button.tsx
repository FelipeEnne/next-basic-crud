const colorClasses = {
  green: "from-green-400 to-green-700",
  blue: "from-blue-400 to-blue-700",
  red: "from-red-400 to-red-700",
  yellow: "from-yellow-400 to-yellow-700",
  gray: "from-gray-400 to-gray-700",
};

interface ButtonProps {
  color?: keyof typeof colorClasses;
  className?: string;
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const color = props.color ?? "gray";
  const className = props.className ?? "";

  return (
    <button
      className={`bg-linear-to-r ${colorClasses[color]} text-white px-4 py-2 rounded-md ${className}`}
    >
      {props.children}
    </button>
  );
}
