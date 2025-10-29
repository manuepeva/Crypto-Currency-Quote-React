import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const Label = styled.label`
  font-family: 'Roboto', cursive;
  color: #333030ff;
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
  border: solid 1px black;
  font-size: 0.8rem;
  margin: 20px 0;
`;

const useMoneda = (label, stateInicial, MONEDAS) => {
  const { t } = useTranslation();
  // State de nuestro custom hook

  const [state, actualizarState] = useState(stateInicial);
  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={(e) => actualizarState(e.target.value)}
        value={state}
        data-testid="selectMonedas"
      >
        <option value={stateInicial}>-- {t('selectOption')} --</option>
        {MONEDAS.map((moneda) => (
          <option key={moneda.codigo} value={moneda.codigo}>
            {moneda.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  // Retornar state, interfaz y función que modifica el state

  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
