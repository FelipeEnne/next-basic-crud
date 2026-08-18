import Client from "@/core/Client";
import { DeleteIcon, EditIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.clientSelected || props.clientDeleted;
  function renderHeader() {
    return (
      <thead className="bg-linear-to-r from-purple-500 to-purple-800 text-gray-100">
        <tr>
          <th className="text-left p-4">Code</th>
          <th className="text-left p-4">Name</th>
          <th className="text-left p-4">Age</th>
          {showActions && <th className="text-center p-4">Actions</th>}
        </tr>
      </thead>
    );
  }

  function renderActions(client: Client) {
    return (
      <>
        {props.clientSelected ? (
          <button
            onClick={() => props.clientSelected?.(client)}
            className="text-green-500 hover:bg-purple-50 p-2 m-1 rounded-full"
          >
            <EditIcon />
          </button>
        ) : (
          false
        )}
        {props.clientDeleted ? (
          <button
            onClick={() => props.clientDeleted?.(client)}
            className="text-red-500 hover:bg-purple-50 p-2 m-1 rounded-full"
          >
            <DeleteIcon />
          </button>
        ) : (
          false
        )}
      </>
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
            {showActions && (
              <td className="text-center p-4">{renderActions(client)}</td>
            )}
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
