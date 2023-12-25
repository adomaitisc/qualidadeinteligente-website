import { conn } from "@/app/db";
import { Post, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Post[]> {
  const query = await conn.execute(
    "SELECT * FROM website_Posts ORDER BY date DESC"
  );
  return query.rows as Post[];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
