import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request,{ params }) => {
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
