import React from "react";

const page = ({ params }) => {
  //   console.log(params.slug);
  const singleBlog = blogs.find((blog) => blog.slug === params.slug);
  const { title, description } = singleBlog;

  return (
    <div>
      <h1>blog details page</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

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
export default page;
