import { conn, website_PostType } from "@/app/db";
import { EditPost } from "./edit-post";

async function getPostBySlug(slug: string) {
  const results = await conn.execute(
    "SELECT * FROM website_Posts WHERE slug = ?",
    [slug]
  );
  return results.rows[0] as website_PostType;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return <EditPost post={post} />;
}
