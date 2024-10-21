import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {}; // means if service is present then provide data else empty obj
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image width={430} height={120} src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between items-center">
            <h6 className="text-primary font-semibold">Price: ${price}</h6>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
