import Client from "@/core/Client";
import Input from "./Input";

interface FormProps {
  client: Client;
}

export default function Form(props: FormProps) {
  return (
    <div>
      <Input
        label="Name"
        value={props.client.getName()}
        type="text"
        readOnly={false}
      />
      <Input
        label="Age"
        value={props.client.getAge()}
        type="number"
        readOnly={false}
      />
    </div>
  );
}
