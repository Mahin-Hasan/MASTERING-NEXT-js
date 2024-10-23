"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";
const Navbar = () => {
  const session = useSession();
  // console.log(session);

  return (
    <div className="bg-stone-100 text-stone-900">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href="./">
            <Image src="/assets/logo.svg" height={60} width={100} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-4">
            {navLinks?.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300 hover:underline"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center text-xl">
            <IoCartOutline />
            <IoSearch />
            <a className="btn btn-primary btn-outline">Appointment</a>
            <div>
              {session?.status === "authenticated" && (
                <Image
                  className="rounded-full"
                  src={session?.data?.user?.image}
                  height={50}
                  width={50}
                  alt={session?.data?.user?.name}
                />
              )}
            </div>
            {session?.status === "loading" && <h6>loading...</h6>}
            {session?.status === "unauthenticated" && (
              <Link href="/login" className="btn btn-primary px-8">
                login
              </Link>
            )}
            {session?.status === "authenticated" && (
              <button
                onClick={() => signOut()}
                className="btn btn-error text-white"
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "MyBookings",
    path: "/my-bookings",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
];
export default Navbar;
