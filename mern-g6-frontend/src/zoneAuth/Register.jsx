import { Lock } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({}); // Use state for errors

  function validate(data) {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = {};

    if (!data.name) {
      errors.name = "Name is required"; // Add validation error for name
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (!re.test(data.password)) {
      errors.password =
        "Password must have at least 8 characters, including uppercase, lowercase, number, and special character";
    }

    return errors;
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(register(data))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-3 rounded shadow-lg">
        <div className="flex justify-center">
          <Lock />
        </div>
        <div className="flex justify-center mb-5">Inscription</div>
        <form onSubmit={handleRegister} className="w-72">
          <div>
            <label htmlFor="name" className="block">
              Nom
            </label>
            <input name="name" type="text" className="w-full" />
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input name="email" type="text" className="w-full" />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password" className="block mt-2">
              Password
            </label>
            <input name="password" type="password" className="w-full" />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">
              Déjà client, <Link to="/login">se connecter</Link>
            </span>
            <button
              className="bg-blue-500 text-sm text-white rounded-sm p-1 mt-3"
              type="submit"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
