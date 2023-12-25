import { AdminPosts } from "./admin-posts";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl pt-8">
      <h1 className="text-2xl">Administrar Publicações</h1>
      <AdminPosts />
    </main>
  );
}
