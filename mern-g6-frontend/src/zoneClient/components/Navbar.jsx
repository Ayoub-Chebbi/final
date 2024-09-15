import { Menu, LogOut } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white p-2 flex justify-between h-10 border-b-2">
      <div id="logo_brand" className="flex items-center ">
        <span className="mr-2">
        <Menu />
        </span>
        <span className="text-lg">
        </span>
      </div>
      <div id="login">
        <span>login</span>
      </div>
    </div>
  );
};

export default Navbar;
