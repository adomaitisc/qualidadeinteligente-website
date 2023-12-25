import Link from "next/link";
import { BookCopy } from "lucide-react";
import AdminPosts from "./admin-posts";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-5xl pt-24">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Administrar Conteúdo</h1>
      </div>
      <div className="pt-4" />
      <AdminPosts />
    </main>
  );
}
