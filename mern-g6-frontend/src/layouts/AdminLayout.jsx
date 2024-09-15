import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Added useSelector
import Navbar from "../zoneAdmin/components/Navbar";
import Sidebar from "../zoneAdmin/components/Sidebar";
import Unauthorized from "../zonePublic/pages/Unauthorized";
import { setUser, deleteUser, login } from "../features/auth/authSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.auth.user); 

  if (user.role !== "admin") {
    return <Unauthorized />;
  }

  return (
    <div className="h-screen flex">
      <div id="left-part" className="bg-gray-100 border basis-[15rem]">
        <Sidebar />
      </div>
      <div id="right-part" className="flex-1">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
