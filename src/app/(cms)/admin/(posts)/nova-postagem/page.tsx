import { currentUser } from "@clerk/nextjs";
import { NewPost } from "./new-post";

export default async function NewPostPage() {
  const user = await currentUser();
  const author = user?.firstName + " " + user?.lastName;

  return (
    <>
      <NewPost author={author} />
    </>
  );
}
