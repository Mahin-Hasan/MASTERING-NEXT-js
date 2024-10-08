import React from "react";
import Link from "next/link";

const AboutContents = () => {
  return (
    <div className="flex-col space-y-4">
      <Link href="/about/history">History</Link>
      <Link href="/about/mission">Mission</Link>
    </div>
  );
};

export default AboutContents;
