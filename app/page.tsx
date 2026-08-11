import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Simple Next CRUD">
        <p>Conteúdo</p>
      </Layout>
    </div>
  );
}
