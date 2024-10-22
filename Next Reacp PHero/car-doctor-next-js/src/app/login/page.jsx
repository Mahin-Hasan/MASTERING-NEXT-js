"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const page = () => {
  const handleLogin = async ()=>{

  }

  return (
    <div className="container mx-auto p-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image  
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="Login Image"
          />
        </div>
        <div className="border-2 p-12">
          <h4 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign In
          </h4>
          <form onSubmit={handleLogin} action="">
          <label htmlFor="email" className="text-stone-900">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="your email"
            className="input input-bordered w-full mt-3"
          />
          <br /> <br />
          <label htmlFor="password" className="text-stone-900 ">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="your password"
            className="input input-bordered w-full mt-3"
          />
          <br /> <br />
          <button type="submit" className="w-full btn btn-primary">Sign In</button>
          </form>
          <div>
            <h6 className="text-center my-6 text-stone-900 font-medium">or Sign in with</h6>
            <div className="flex items-center justify-center space-x-3">
              <button className="flex items-center btn rounded-full text-lg btn-outline">
                <BsGithub />
              </button>
              <button className="flex items-center btn rounded-full text-lg btn-outline">
                <BsGoogle />
              </button>
            </div>
            <h6 className="text-center my-6 text-stone-900 font-medium">Not Have account ? <Link className="text-primary font-semibold underline" href="/signup">Sign Up</Link></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
