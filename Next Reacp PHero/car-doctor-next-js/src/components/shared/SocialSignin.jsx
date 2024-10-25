"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin = () => {
  const router = useRouter();
  const session = useSession();
  const path = useSearchParams().get('redirect')
  const handleSocialLogin = (provider) => {
    const resp = signIn(provider, { redirect: true,callbackUrl: path? path : '/' });
  };
  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={() => handleSocialLogin("github")}
        className="flex items-center btn rounded-full text-lg btn-outline"
      >
        <BsGithub />
      </button>
      <button
        onClick={() => handleSocialLogin("google")}
        className="flex items-center btn rounded-full text-lg btn-outline"
      >
        <BsGoogle />
      </button>
    </div>
  );
};

export default SocialSignin;
