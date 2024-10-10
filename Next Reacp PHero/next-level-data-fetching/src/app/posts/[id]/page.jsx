import React from "react";

const getPostDetail = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetailPage = async ({ params }) => {
  const { title, body } = await getPostDetail(params.id);
  console.log(params);
  return (
    <div>
      <h1>Post detail of id: {params.id}</h1>
      <h4>{title}</h4>
      <h4>{body}</h4>
    </div>
  );
};

export default PostDetailPage;
