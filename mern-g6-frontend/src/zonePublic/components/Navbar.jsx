import { Hexagon, LogIn, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteUser} from '../../features/auth/authSlice'
import { useNavigate} from "react-router-dom";

const Navbar = () => {
  const [visibleUserPanel , setVisibleUserPanel] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const nav = useNavigate();

  const handleLogout = () => {
    dispatch(deleteUser());
    nav('/')
  };

  return (
    <div
      className="bg-white p-2 h-[4rem] 
    flex justify-between items-center "
    >
      <div id="logo_brand" className="mt-2 flex items-center ">
        <span className="mr-2">
          <Hexagon />
        </span>
        <span className="text-lg">E-store</span>
      </div>
      <div id="right" className="flex gap-1 items-center">
        <Link to="/" className="text-md hover:text-blue-600">
          Accueil
        </Link>
        <a href="" className="text-md hover:text-blue-600">
          Services
        </a>
        <a href="" className="text-md hover:text-blue-600">
          Produits
        </a>
        <Link to="/contact" className="text-md hover:text-blue-600">
          Contact
        </Link>
        {Object.keys(user).length ==0 ? (<Link to='/login'> <LogIn /></Link>) : 

        (<div onMouseEnter={()=> setVisibleUserPanel(true)}
          onMouseLeave={()=> setVisibleUserPanel(false)} 

          id="userProfil" className="relative flex gap-1 items-center mx-2">
          <span className="text-lg font-medium capitalize">{user.name}</span>
          <img
            src={import.meta.env.VITE_SERVER_URL + user.imgUrl}
            className="h-8 rounded-full border border-gray-400"
            alt=""
          />
            {visibleUserPanel && (
              <div id="userPanel" className="border absolute right-2 top-7 z-30 bg-white shadow-lg rounded w-[10rem]"> 
            <span className="block p-1">{user.name}</span>
            <Link to='/user' className="block p-1 pl-2">Profile</Link>
            <span onClick={handleLogout} className="block p-2 cursor-pointer hover:bg-blue-600 hover:text-white">Se deconnecter</span>
          </div>
        )}
          

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
