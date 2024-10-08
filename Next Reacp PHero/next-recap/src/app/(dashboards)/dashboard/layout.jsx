import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* <nav className="bg-cyan-700">Dashboard Layout</nav> */}
      <div className="min-h-screen">{children}</div>
      {/* <footer className="text-center bg-cyan-700 p-3">dashboard Footer</footer> */}
    </div>
  );
};

export default DashboardLayout;
