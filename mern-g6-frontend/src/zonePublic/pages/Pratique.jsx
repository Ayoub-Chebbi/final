import React, { useState } from "react";

const pratique = () => {
  const [resultat, setResultat] = useState();
  const [celsius, setCelsius] = useState();
  function handleConversion(e) {
    e.preventDefault();
    let temp = parseFloat(e.target.temperature.value); //parseFloat converte le chaine de caractére en nombre
    console.log(typeof temp); //typeof donne le type de variable où d'objet
    let f = temp * 1.8 + 32;
    setResultat(f);
  }
  function handleConversionRealTime(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleConversion}>
        <label htmlFor=""> Temperature en c°</label>
        <input
          onChange={handleConversionRealTime}
          name="temperature"
          type="text"
          className="border-2 rounded px-2"
        />
        <button className="bg-blue-700 hover:bg-blue-600 text-white px-6">
          Convertir
        </button>
      </form>
      <div>
        <h1 className="mt-5">Temperature en Fahernheit </h1>
        <p>{resultat}</p>
      </div>
    </div>
  );
};

export default pratique;
