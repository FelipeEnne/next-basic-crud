"use client";

import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import Button from "@/components/Button";

export default function Home() {
  const clients = [
    new Client("1", "John Doe", 20),
    new Client("2", "Jane Doe", 21),
    new Client("3", "Jim Doe", 22),
  ];

  function clientSelected(client: Client) {
    console.log(client.getName());
  }

  function clientDeleted(client: Client) {
    console.log(client.getName());
  }

  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Simple Next CRUD">
        <div className="flex justify-end">
          <Button color="green" className="mb-4">
            New Client
          </Button>
        </div>
        <Table
          clients={clients}
          clientSelected={(client) => clientSelected(client)}
          clientDeleted={(client) => clientDeleted(client)}
        />
      </Layout>
    </div>
  );
}
