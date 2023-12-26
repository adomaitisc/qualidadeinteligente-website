import { Newsletter } from "@/app/(site)/newsletter";
import { posts } from "@/app/(site)/posts";
import { Void } from "@/app/(site)/void";
import { PostHero } from "./components/post-hero";
import { PostDetails } from "./components/post-details";
import { conn, website_PostType } from "@/app/db";
import { PostImage } from "./components/post-image";

async function getPostBySlug(slug: string) {
  const results = await conn.execute(
    "SELECT * FROM website_Posts WHERE slug = ?",
    [slug]
  );
  return results.rows[0] as website_PostType;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  // convert content from string to object
  const content = JSON.parse(post.content);

  return (
    <main className="mx-auto max-w-5xl px-1 text-white">
      <PostHero src={post.image_src} alt={post.image_src} />
      {/* Title date and category */}
      <PostDetails
        title={post.title}
        category={post.category}
        date={new Date(post.date)}
        author={post.author}
      />
      {/* Content */}
      <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 px-3 text-lg text-neutral-200 md:px-0">
        {content.map((item: any) => {
          if (item.key === "heading") {
            return (
              <h2 key={item.id} className="text-xl font-medium text-white">
                {item.value}
              </h2>
            );
          }
          if (item.key === "paragraph") {
            return <p key={item.id}>{item.value}</p>;
          }
          if (item.key === "image") {
            return (
              <PostImage
                key={item.id}
                src={item.value.src}
                alt={item.value.alt}
              />
            );
          }
          return null;
        })}
      </div>
      <Void gap={36} />
      <Newsletter />
      <Void gap={36} />
    </main>
  );
}
