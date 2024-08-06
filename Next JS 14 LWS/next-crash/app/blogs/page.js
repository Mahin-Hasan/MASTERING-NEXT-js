import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "description of blog 1",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "description of blog 2",
    },
  ];
  return (
    <main className="mt-4">
      {/* <h3>This is Blogs page</h3> */}
      <ul>
        {blogs.map((blog) => (
          <li className="mb-4" key={blog.id}>
            <Link href={`blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
