import React, { useEffect, useState } from 'react';
import useMoneda from '../../Hooks/useMoneda';
import useCryptoMoneda from '../../Hooks/useCryptoMoneda';
import Error from '../Error/Error';
import { fetchListOfCryptos } from '../../api/fetchListOfCryptos';
import ButtonStyled from './FormularioStyles';
import { monedas } from '../../__mocks__/cryptomonedas';
import { useTranslation } from 'react-i18next';

const Form = ({ error, handleFormSubmit }) => {
  const { t } = useTranslation();
  const [cryptosList, setCryptosList] = useState([]);

  const [moneda, Seleccionar] = useMoneda(t('selectCurrency'), '', monedas);
  const [cryptomoneda, SeleccionarCrypto] = useCryptoMoneda(t('selectCrypto'), '', cryptosList);

  useEffect(() => {
    const getListOfCryptos = async () => {
      try {
        const {
          data: { Data },
        } = await fetchListOfCryptos();
        setCryptosList(Data);
      } catch (error) {
        throw new Error('There was an error fetching cryptos list.');
      }
    };
    getListOfCryptos();
  }, []);

  const sendFormData = (e) => {
    e.preventDefault();
    handleFormSubmit(cryptomoneda, moneda);
  };

  return (
    <form onSubmit={sendFormData}>
      {error ? <Error mensaje={t('error')} /> : null}

      <Seleccionar />

      <SeleccionarCrypto />

      <ButtonStyled type="submit" value={t('getQuote')} />
    </form>
  );
};

export default Form;
