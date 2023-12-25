import { conn } from "@/app/db";
import { generateSlug } from "./slug";

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
