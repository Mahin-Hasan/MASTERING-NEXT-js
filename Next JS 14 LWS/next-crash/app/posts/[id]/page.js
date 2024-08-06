// import Comments from "@/app/components/Comments";
import Comments from "@/app/components/Comments";
import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

const PostDetail = async ({ params }) => {
  const { id } = params;
  //standard fetching
  //   const post = await getPost(id);
  //   const comment = await getPostComment(id);
  //parallel fecthing
  //   const postPromise = getPost(id);
  //   const commentPromise = getPostComment(id);
  //   const [post, comments] = await Promise.all([postPromise, commentPromise]);

  //using react suspense || helps to load small part one by one || also known as progressing rendering which next js prefers
  const postPromise = getPost(id);
  const commentPromise = getPostComment(id);
  const post = await postPromise;
  return (
    <div className="mt-6">
      <h2 className="text-xl text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p> <hr />
      <div className="mt-6">
        <Suspense fallback="<h1>Loading Comments..</h1>">
          <Comments promise={commentPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default PostDetail;
