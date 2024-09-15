import React from "react";
import notfound from "../../assets/notfound.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <img src={notfound} alt="not found page" />
      </div>
      <Link to="/" className="text-blue-700 inline-block hover:text-blue-500">
        cliquer ici pour retourner à la page d'accuiel
      </Link>
    </div>
  );
};

export default NotFound;
