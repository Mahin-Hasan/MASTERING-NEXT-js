"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyBookingsPage = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  const loadData = async () => {
    const resp = await fetch(
      `http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await resp.json();
    setBookings(data.myBookings);
  };

  // console.log(bookings);
  const handleDelete = async (id) => {
    const deleted = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`,
      { method: "DELETE" }
    );
    const resp = await deleted.json();
    console.log(resp);

    toast.error(resp?.message);
    if (resp?.response?.deletedCount > 0) {
      loadData();
    }

    // console.log(deleted);
    //will not work refetch
    // if (deleted?.response?.deletedCount > 0) {
    //   loadData();
    // }
  };

  useEffect(() => {
    loadData();
  }, [session]);
  return (
    <div className="container mx-auto">
      {/* <ToastContainer/> */}
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            My Bookings
          </h1>
        </div>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map(({ serviceTitle, _id, date, price }, idx) => (
                <tr key={_id}>
                  <th className="text-stone-900">{idx + 1}</th>
                  <td className="text-stone-900">{serviceTitle}</td>
                  <td className="text-stone-900">{price}</td>
                  <td className="text-stone-900">{date}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link href={`/my-bookings/update/${_id}`}>
                        <button class="btn btn-primary">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        class="btn btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
