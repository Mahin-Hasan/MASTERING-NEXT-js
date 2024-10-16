import React from "react";
import { Headland_One } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "About ",
  description: "Text generated from layout",
};
//no store solves the cached behavour in the front end
// const getTime = async () => {
//   const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
//   const data = await res.json();
//   return data.currentTime;
// };
// update after a fixed time
const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const session = await getServerSession(authOptions)
  console.log({session});
  const currentTime = await getTime();

  return (
    <div className={`${headland.className} min-h-screen px-12 py-24`}>
      <h1 className="text-2xl">This is about in build</h1>
      <h2 className="text-xl text-blue-700">Time: {currentTime}</h2>
    </div>
  );
};

export default AboutPage;
