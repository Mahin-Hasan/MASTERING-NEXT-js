import React from "react";

const blogs = [
  {
    id: 1,
    slug: "modern-web-development-trends",
    title: "Top 5 Modern Web Development Trends in 2024",
    picture: "https://example.com/images/web-dev-trends.jpg",
    description:
      "A deep dive into the latest web development trends such as Jamstack, Web3, AI-powered tools, and how they are shaping the future of the web.",
  },
  {
    id: 2,
    slug: "aws-vs-azure-cloud-comparison",
    title: "AWS vs Azure: A Detailed Cloud Comparison",
    picture: "https://example.com/images/aws-vs-azure.jpg",
    description:
      "This article compares AWS and Azure cloud platforms based on performance, scalability, and cost-effectiveness to help you make an informed decision.",
  },
  {
    id: 3,
    slug: "getting-started-with-docker",
    title: "Getting Started with Docker: A Beginner's Guide",
    picture: "https://example.com/images/docker-guide.jpg",
    description:
      "Learn the basics of Docker, containerization, and how to set up your first containerized application in this beginner-friendly guide.",
  },
  {
    id: 4,
    slug: "top-javascript-frameworks-2024",
    title: "Top JavaScript Frameworks to Learn in 2024",
    picture: "https://example.com/images/js-frameworks.jpg",
    description:
      "An overview of the most popular JavaScript frameworks, including React, Vue, Angular, and the reasons why they are essential for modern web development.",
  },
  {
    id: 5,
    slug: "ai-tools-for-developers",
    title: "Best AI Tools Every Developer Should Know",
    picture: "https://example.com/images/ai-tools.jpg",
    description:
      "A roundup of the best AI-powered tools that can boost productivity and code efficiency for developers in 2024.",
  },
];

const BlogPage = () => {
  return (
    <div className="p-24">
      {blogs?.map((blog) => (
        <div key={blog.id} className="border-2 p-10">
          <h3>{blog.title}</h3>
          <h3>{blog.description}</h3>
          <button className="bg-blue-700 p-3 rounded-lg text-white font-semibold">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
