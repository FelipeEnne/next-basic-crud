import Client from "@/core/Client";

interface TableProps {
  clients: Client[];
}

export default function Table(props: TableProps) {
  function renderHeader() {
    return (
      <thead className="bg-linear-to-r from-purple-500 to-purple-800 text-gray-100">
        <tr>
          <th className="text-left p-4">Code</th>
          <th className="text-left p-4">Name</th>
          <th className="text-left p-4">Age</th>
        </tr>
      </thead>
    );
  }

  function renderBody() {
    return (
      <tbody>
        {props.clients?.map((client, i) => (
          <tr
            key={`client-row-${i}-${client.getId()}`}
            className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
          >
            <td className="text-left p-4">{client.getId()}</td>
            <td className="text-left p-4">{client.getName()}</td>
            <td className="text-left p-4">{client.getAge()}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <table className="w-full rounded-md overflow-hidden">
      {renderHeader()}
      {renderBody()}
    </table>
  );
}
