import React from "react";

const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
};

const PostPage = async () => {
  const postData = await getPosts();
  console.log(postData);
  return (
    <div>
      <h1>All Post</h1>
      <div className="grid grid-cols-4 gap-6">
        {postData?.map(({ id, title, body }) => (
          <div key={id} className="border-2 p-3 rounded-2xl">
            <h5>{title}</h5>
            <h5>{body}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
