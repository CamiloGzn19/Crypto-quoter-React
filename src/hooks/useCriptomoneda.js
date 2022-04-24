import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  letter-spacing: 0.2rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
  // State del custom Hook
  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="">-- Seleccione --</option>
        {opciones.map((opciones) => (
          <option key={opciones.CoinInfo.Id} value={opciones.CoinInfo.Name}>
            {opciones.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;
