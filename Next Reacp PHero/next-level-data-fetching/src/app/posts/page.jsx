import { getPosts } from "@/services/postApi";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Post",
  description: "Text generated from post",
  keywords: ["post", "post page"],
};

const PostPage = async () => {
  const postData = await getPosts();
  //   console.log(postData);
  return (
    <div className="p-10">
      <h1>All Post</h1>
      <div className="grid grid-cols-4 gap-6">
        {postData?.slice(0, 20)?.map(({ id, title, body }) => (
          <div key={id} className="border-2 p-3 rounded-2xl">
            <h5>Title: {title}</h5>
            <h5>{body}</h5>
            <button className="bg-blue-700 p-2">
              <Link href={`/posts/${id}`}>See post details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
