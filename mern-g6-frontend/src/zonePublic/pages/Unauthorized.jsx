import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  // faire revenir l'utilisateur à sa page precdente aorés 3s
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-red-600 text-6xl uppercase font-bold ">
        Unauthorized
      </div>
      <p className="text-gray-700 text-lg">
        {" "}
        you do not have privileges to access this area
      </p>
      <Link to="/" className="text-blue-600 hover:text-blue-700 mt-5">
        {" "}
        Retour à la page d'accuil
      </Link>
      <button
        onclick={() => navigate("/")}
        className="text-blue-600 hover:text-blue-700 mt-5 border border-cyan-700 p-2 rounded"
      >
        Retour à la page d'accuil {"  "}
      </button>
    </div>
  );
};

export default Unauthorized;
