import { currentUser } from "@clerk/nextjs";
import AdminPosts from "./components/admin-posts";

export default async function AdminPage() {
  const user = await currentUser();
  return (
    <main className="mx-auto max-w-5xl pt-24">
      <div className="flex flex-col">
        <h1 className="text-2xl">
          Olá, {user?.firstName + " " + user?.lastName}
        </h1>
        <p className="text-neutral-400">Administre postagens do blog da QI.</p>
      </div>
      <div className="pt-4" />
      <AdminPosts />
    </main>
  );
}
