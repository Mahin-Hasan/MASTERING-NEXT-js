import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const PostPage = async () => {
  const posts = await getAllPosts();
  
  return (
    <div className="mt-6">
      <h1>All posts</h1>
      <ul className="mt-6">
        {posts && posts.length > 0 ? (
          posts.map((post) => <li className="mb-3 text-sm font-light" key={post.id}><Link href={`posts/${post.id}`}>{post?.title}</Link></li>)
        ) : (
          <div>No posts available</div>
        )}
      </ul>
    </div>
  );
};

export default PostPage;
