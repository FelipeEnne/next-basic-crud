import Client from "@/core/Client";

interface InputProps {
  label: string;
  value: string | number | boolean;
  type?: "text" | "number" | "date" | "select" | "checkbox";
  readOnly?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type || "text"}
        value={props.value as string}
        readOnly={props.readOnly}
      />
    </div>
  );
}
