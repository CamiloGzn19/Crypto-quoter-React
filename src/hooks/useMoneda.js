import React from "react";

const useMoneda = () => {
  // State del custom Hook
  const [state, actualizaState] = useState("");

  const Seleccionar = () => (
    <>
      <label>Moneda</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, Seleccionar, actualizaState];
};

export default useMoneda;
