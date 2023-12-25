import { conn } from "@/app/db";

type RequestData = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  category: string;
  author: string;
  content: any;
};

function generateSlug(title: string): string {
  // Convert the title to lowercase and replace spaces with hyphens
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Remove any non-alphanumeric characters and hyphens at the beginning/end
  const cleanSlug = slug.replace(/[^a-z0-9-]/g, "").replace(/^-+|-+$/g, "");

  return cleanSlug;
}

export async function POST(request: Request) {
  const data: RequestData = await request.json();
  console.log(data);

  const organizedData = {
    title: data.title,
    image: data.image,
    date: new Date(data.date),
    category: data.category,
    author: data.author,
    content: JSON.stringify(data.content),
  };

  console.log(organizedData);

  try {
    const result = await conn.execute(
      "INSERT INTO website_Posts (title, image_src, image_alt, category, date, author, slug, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
      [
        organizedData.title,
        organizedData.image.src,
        organizedData.image.alt,
        organizedData.category,
        organizedData.date,
        organizedData.author,
        generateSlug(organizedData.title),
        organizedData.content,
      ]
    );
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ message: "ok" }), {
    headers: { "content-type": "application/json" },
  });
}
