import React from "react";
import { Headland_One } from "next/font/google";

const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "About ",
  description: "Text generated from layout",
};

const AboutPage = () => {
  return <div className={`${headland.className} min-h-screen px-12 py-24`}>This is about</div>;
};

export default AboutPage;
