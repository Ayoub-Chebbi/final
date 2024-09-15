import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../zoneClient/components/Navbar";
import Sidebar from "../zoneClient/components/Sidebar";

const ClientLayout = () => {
  return (
    <div className=" h-screen flex">
      <div id="left-part" className="border-r-2 bg-gray-100 border basis-[15rem]">
        <Sidebar />
      </div>
      <div id="right-part" className="flex-1">
        <div>
          <Navbar />
        </div>
        <div className="p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
