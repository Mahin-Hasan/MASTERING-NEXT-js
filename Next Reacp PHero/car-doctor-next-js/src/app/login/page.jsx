"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";

const LoginPage = () => {
  const router = useRouter()
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect:false
    });
    console.log('current User',resp);
    if(resp.status ===200){
      router.push('/')
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
              Sign In
            </button>
          </form>
          <div>
            <h6 className="text-center my-6 text-stone-900 font-medium">
              or Sign in with
            </h6>
            <SocialSignin/>
            <h6 className="text-center my-6 text-stone-900 font-medium">
              Not Have account ?{" "}
              <Link
                className="text-primary font-semibold underline"
                href="/signup"
              >
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
