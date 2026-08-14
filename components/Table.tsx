import Client from "@/core/Client";

interface TableProps {
  clients: Client[];
}

export default function Table(props: TableProps) {
  function renderHeader() {
    return (
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
    );
  }

  function renderBody() {
    return (
      <tbody>
        {props.clients?.map((client, i) => (
          <tr key={client.getId()}>
            <td>{client.getId()}</td>
            <td>{client.getName()}</td>
            <td>{client.getAge()}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <table>
      {renderHeader()}
      {renderBody()}
    </table>
  );
}
