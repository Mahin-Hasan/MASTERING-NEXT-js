import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

//only delete operation was done initially from delete-booking/[id]/route.js

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    }); // must include new ObjectID
    return Response.json({ message: "Deleted the Booking", response: resp });
  } catch (error) {
    return Response.json({ message: "an error occured while deleting" });
  }
};
// building all api in in single route using refactoring method

//update one
export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  // const { date, phone, address } = await request.json(); \\ will create null object in dvb
  const updateDoc = await request.json();
  try {
    const resp = await bookingsCollection.updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: {
          ...updateDoc
        },
      },
      {
        upsert: true,
      }
    );
    return Response.json({ message: "Updated the Booking", response: resp });
  } catch (error) {
    return Response.json({ message: "an error occured while updating" });
  }
};

// get by id
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    }); // must include new ObjectID
    return Response.json({ message: "Booking Found", data: resp });
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};
