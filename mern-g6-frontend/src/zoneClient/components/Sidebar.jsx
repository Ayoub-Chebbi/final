import React from "react";
import { Store, UserCheck } from "lucide-react";
import { Hexagon, LogIn, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteUser} from '../../features/auth/authSlice'
import { useNavigate} from "react-router-dom";

const Sidebar = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);


  return (
    <div>
      <div id="title" className="flex justify-center gap-2
       items-center mt-3 text-2xl uppercase flex-col text-center p-2">
      <img
          src={import.meta.env.VITE_SERVER_URL + user.imgUrl}
          className="h-20 rounded-full border border-gray-400"
          alt=""
          />

          <span className="uppercase
          text-xl text-center font-medium">{user.name}</span>
      </div>
      
      <div id="link" className="mt-6 p-2">
      <Link to="/" className="flex items-center mb-2">
          <Store size={21} className="inline-block mr-1" />
          Store
        </Link>
        <Link to="" className="flex items-center mb-2">
          <UserCheck size={21} className="inline-block mr-1" />
          Gestion Profile
        </Link>
        <Link to="" className="flex items-center mb-2">
          <ShoppingBag size={21} className="inline-block mr-1" />
          Gestion Commandes
        </Link>
        <Link to="" className="flex items-center mb-2">
          <Hexagon size={21} className="inline-block mr-1" />
          Gestion Produits
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
