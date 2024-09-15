import { Lock } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setUser, deleteUser, login } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(login(data))
      .then((res) => {
        console.log(res);
        dispatch(setUser(res.payload.user));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="flex justify-center items-center
     h-screen bg-gray-100"
    >
      <div className="bg-white p-3 rounded shadow-lg">
        <div className="flex justify-center">
          <Lock />
        </div>
        <div className="flex justify-center mb-5 ">Connexion</div>
        <form onSubmit={handleSubmit} className="w-72">
          <div>
            <label htmlFor="" className="block text-sm">
              Email
            </label>
            <input
              name="email"
              type="text"
              className="w-full text-sm p-1 mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="block mt-2 text-sm">
              Mot de passe
            </label>
            <input
              name="password"
              type="password"
              className="w-full text-sm p-1 mt-1"
            />
          </div>
          <div className="flex justify-between items-center ">
            <span className="text-xs">
              Pas de compte,
              <Link to="/register">s'inscrire</Link>
            </span>

            <button
              type="submit"
              className="bg-blue-500 text-sm
             text-white rounded-sm p-1 mt-3  "
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
