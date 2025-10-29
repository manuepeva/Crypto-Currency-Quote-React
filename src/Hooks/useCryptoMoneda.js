import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Label = styled.label`
  font-family: "Roboto", cursive;
  color: #232121ff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 0.8rem;
  border: solid 1px black;
  margin: 20px 0;
`;

const useCryptoMoneda = (label, stateInicial, MONEDAS) => {
  // State de nuestro custom hook
  const { t } = useTranslation();
  const [state, actualizarState] = useState(stateInicial);

  const SeleccionarCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={(e) => actualizarState(e.target.value)}
        value={state}
        data-testid="select-cryptos"
      >
        <option value="">-- {t("selectOption")} --</option>
        {MONEDAS.map((moneda) => (
          <option
            key={moneda.CoinInfo.Id}
            value={moneda.CoinInfo.Name}
            data-testid="opcion-crypto"
          >
            {moneda.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  // Retornar state, interfaz y función que modifica el state

  return [state, SeleccionarCrypto, actualizarState];
};

export default useCryptoMoneda;
