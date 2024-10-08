"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  const handler = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return <nav className="bg-cyan-700">Dashboard Layout</nav>;
  return (
    <nav className="flex justify-between items-center p-3 text-lg font-semibold bg-blue-700">
      <h2 className="text-3xl ">
        <a href="/">NEXT</a>
      </h2>
      <ul className="flex justify-between space-x-4">
        {/* <li><a href="/about">about</a></li> //using standard */}
        {/* <li><Link href={"/about"}>about</Link></li> //next js method */}
        {links?.map((link) => (
          <Link
            className={`${
              pathName === link.path ? "text-blue-400 underline" : ""
            }`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button onClick={handler} className="bg-purple-700 p-2 rounded-xl">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
