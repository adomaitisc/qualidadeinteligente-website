import { conn } from "@/app/db";
import { generateSlug } from "../slug";

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

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data: RequestData = await request.json();
  console.log(params.id);
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
      "UPDATE website_Posts SET title = ?, image_src = ?, image_alt = ?, category = ?, date = ?, slug = ?, content = ? WHERE id = ?;",
      [
        organizedData.title,
        organizedData.image.src,
        organizedData.image.alt,
        organizedData.category,
        organizedData.date,
        generateSlug(organizedData.title),
        organizedData.content,
        params.id,
      ]
    );
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ message: "ok" }), {
    headers: { "content-type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);
  try {
    const result = await conn.execute(
      "DELETE FROM website_Posts WHERE id = ?;",
      [params.id]
    );
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ message: "ok" }), {
    headers: { "content-type": "application/json" },
  });
}
