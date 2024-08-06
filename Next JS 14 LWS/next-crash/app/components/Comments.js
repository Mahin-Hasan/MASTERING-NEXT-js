const Comments = async ({ promise }) => {
  const comments = await promise;
  return (
    <div>
      <h1 className="text-xl text-blue-500 mb-4">Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li className="mb-2 text-sm" key={comment.id}>
            {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
