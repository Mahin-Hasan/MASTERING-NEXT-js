"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    router.push("/api/auth/signin");
  };
  const handlerSignup = () => {
    router.push("/api/auth/signup");
  };

  // for dashboard layout
  // if (pathName.includes("dashboard"))
  //   return <nav className="bg-cyan-700">Dashboard Layout</nav>;
  return (
    <nav className="flex justify-between items-center p-3 text-lg font-semibold bg-blue-700">
      <h2 className="text-3xl ">
        <Link href="/">NEXT</Link>
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
      {session.status === "authenticated" ? (
        <div className="flex items-center gap-3">
          <div className="rounded-full overflow-hidden size-12">
            {" "}
            <Image
              height={50}
              width={50}
              src={session?.data?.user?.image}
              alt={session.data.user.name}
            />
          </div>

          <div>
            <h6>{session.data.user.name}</h6>
            <h6>{session.data.user.type}</h6>
          </div>
          <button onClick={()=> signOut()} className="bg-red-700 p-2 rounded-xl">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <button onClick={handlerSignup} className="bg-sky-700 p-2 rounded-xl">
            signup
          </button>
          <button onClick={handler} className="bg-blue-900 p-2 rounded-xl">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
