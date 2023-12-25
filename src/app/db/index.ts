import "dotenv/config";
import { connect } from "@planetscale/database";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

export const conn = connect(config);

export type website_PostType = {
  id: number;
  title: string;
  image_src: string;
  image_alt: string;
  category: string;
  date: string; // Assuming you receive dates as strings, adjust accordingly
  author: string;
  slug: string;
  content: string;
};
