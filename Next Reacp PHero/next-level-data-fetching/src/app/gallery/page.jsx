import Image from "next/image";
import React from "react";

const GallaryPage = () => {
  return (
    <div className="px-12 py-24">
      <h6 className="text-3xl">Gallary Page</h6>
      {/* <Image src="/images/1.jpg" alt="img 1" height="1080" width="1920" /> */}
      {/* displaying image in optimized way */}
      <div>
        {[1, 2, 3, 4, 5]?.map((img) => (
          <Image
            key={img}
            src={`/images/${img}.jpg`}
            alt="img 1"
            height="1080"
            width="1920"
          />
        ))}
      </div>
    </div>
  );
};

export default GallaryPage;
