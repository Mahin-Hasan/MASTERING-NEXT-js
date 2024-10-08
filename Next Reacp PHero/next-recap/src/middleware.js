// import { NextResponse } from "next/server";

// export const middleware = (request) => {
//   return NextResponse.next();
// };

// export const config = {
//   matcher: "/dashboard",
// };

// import { NextResponse } from "next/server";

// export const middleware = (request) => {
//   return NextResponse.redirect(new URL("/about/history", request.url));
// };

// export const config = {
//   matcher: "/about",
// };
//checking multiple params
// import { NextResponse } from "next/server";
// rewrite doesnot change the url
// export const middleware = (request) => {
//   return NextResponse.redirect(new URL("/about/history", request.url));
// };

// export const config = {
//   matcher: ['/about', '/services'],
// };

// without using matcher
// import { NextResponse } from "next/server";
// export const middleware = (request) => {
//   if (request.nextUrl.pathname.startsWith("/about")) {
//     return NextResponse.redirect(new URL("/services", request.url));
//   }
// };

//handling user based on log in

// import { NextResponse } from "next/server";
// const user = true;

// export const middleware = (request) => {
//   if (!user) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/dashboard", "/services"],
// };

// handling user by checking cookie no db to manually set cookie

import { NextResponse } from "next/server";

const coo = "next-app";

export const middleware = (request) => {
  const cookies = request.cookies.get("token");
  if (!cookies || cookies.value !== coo) {
    return NextResponse.redirect(new URL("/login", request.url));
  } 
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
