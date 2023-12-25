import { Void } from "../void";
import { BlogHero } from "./components/blog-hero";
import { BlogList } from "./components/blog-list";
import { conn, website_PostType } from "@/app/db";

async function getRecentPosts() {
  const results = await conn.execute(
    "SELECT * FROM website_Posts ORDER BY date DESC"
  );
  return results.rows as website_PostType[];
}

export default async function Home() {
  const posts = await getRecentPosts();

  return (
    <main className="relative mx-auto max-w-6xl overflow-hidden p-4 pb-0 text-white">
      <Void gap={48} />

      <BlogHero />

      <Void gap={12} />
      <BlogList posts={posts} />

      <Void gap={24} />
    </main>
  );
}
