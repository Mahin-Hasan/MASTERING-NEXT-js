import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const services = await servicesCollection.find().toArray();
    return Response.json({ services });// might give error
    // return NextResponse.json({ services });// can be fixed with nextResponse
  } catch (error) {
    console.log(error);
  }
};

//from gpt
// import { connectDB } from "@/lib/connectDB";

// export const GET = async () => {
//   const db = await connectDB();
//   const servicesCollection = db.collection("services");

//   try {
//     // Fetching all services as an array
//     const services = await servicesCollection.find().toArray();
    
//     // Returning the response as JSON
//     return new Response(JSON.stringify({ services }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response(JSON.stringify({ error: "Failed to fetch services" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// };
