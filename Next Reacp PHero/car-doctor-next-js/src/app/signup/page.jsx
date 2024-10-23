"use client";
import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React from "react";
 
const SignUpPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();

    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    // console.log(newUser);
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp.status === 200) {
      e.target.reset();
    }
  };
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
            Sign Up
          </h4>
          <form onSubmit={handleSignUp} action="">
            <label htmlFor="name" className="text-stone-900">
              name
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="input input-bordered w-full mt-3 text-stone-900 !important"
            />{" "}
            <br /> <br />
            <label htmlFor="email" className="text-stone-900">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="input input-bordered w-full mt-3 text-stone-900 !important"
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
              className="input input-bordered w-full mt-3 text-stone-900 !important"
            />
            <br /> <br />
            <button type="submit" className="w-full btn btn-primary">
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="text-center my-6 text-stone-900 font-medium">
              or Sign in with
            </h6>
            <SocialSignin/>
            <h6 className="text-center my-6 text-stone-900 font-medium">
              Already Have account ?{" "}
              <Link
                className="text-primary font-semibold underline"
                href="/login"
              >
                Login
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
