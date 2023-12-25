import { conn } from "@/app/db";

type RequestData = {
  name: string;
  email: string;
  companyName: string;
  taxId: string;
  message: string;
  subscribeToNewsletter: boolean;
};

export async function POST(request: Request) {
  const data: RequestData = await request.json();
  console.log(data);

  const organizedData = {
    name: data.name,
    email: data.email,
    companyName: data.companyName,
    taxId: data.taxId,
    message: data.message,
    subscribeToNewsletter: data.subscribeToNewsletter,
  };

  console.log(organizedData);

  try {
    // const result = await conn.execute(
    //   "INSERT INTO website_Posts (title, image_src, image_alt, category, date, author, slug, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    //   [
    //     organizedData.title,
    //     organizedData.image.src,
    //     organizedData.image.alt,
    //     organizedData.category,
    //     organizedData.date,
    //     organizedData.author,
    //     generateSlug(organizedData.title),
    //     organizedData.content,
    //   ]
    // );
  } catch (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ message: "ok" }), {
    headers: { "content-type": "application/json" },
  });
}
