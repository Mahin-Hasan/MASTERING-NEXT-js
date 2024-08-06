const getAllPosts = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);

    if(!result.ok) throw new Error('There was a error while fetching posts')

  return result.json();
};

export default getAllPosts;
