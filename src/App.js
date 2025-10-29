import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import cryptoImagen from "./Images/cryptomonedas.png";
import Form from "./Components/Form/Form";
import CryptoQuote from "./Components/CryptoQuote/CryptoQuote";
import Spinner from "./Components/Spinner/Spinner";
import { handleCrytoAPICall } from "./api/handleCryptoAPICall";
import { useTranslation } from "react-i18next";
import Error from "./Components/Error/Error";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${cryptoImagen});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderSection = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 8vh;
  background-color: lightblue;
  box-shadow: 0px 0px 0px 2px white;
`;

const FormSection = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 12vh;
  @media (min-width: 768px) {
    padding: 20px;
    flex: 1;
  }
`;
const DisplayInfo = styled.div`
  display: flex;
  flex: 1;
`;

const Heading = styled.h1`
  font-family: "Roboto";
  color: #141313ff;
  text-align: left;
  font-size: 18px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

function App() {
  const [cryptoData, setCryptoData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [apiError, setApiError] = useState(false);
  const { t } = useTranslation();

  const handleFormSubmit = async (cryptoCurrency, currency) => {
    if (currency === "" || cryptoCurrency === "") {
      setError(true);
      return;
    }
    setLoading(true);
    try {
      const cryptoData = await handleCrytoAPICall(cryptoCurrency, currency);
      setCryptoData(cryptoData);
      setLoading(false);
      setError(false);
    } catch (error) {
      setApiError(true);
      setLoading(false);
      setError(false);
    }
  };
  const componente = loading ? (
    <Spinner />
  ) : (
    <CryptoQuote cryptoData={cryptoData} />
  );
  return (
    <Container>
      <HeaderSection>
        <Heading>{t("title")}</Heading>
      </HeaderSection>
      <FormSection>
        <Form handleFormSubmit={handleFormSubmit} error={error} />
      </FormSection>
      <DisplayInfo>
        {apiError ? <Error mensaje={t("apiError")} /> : componente}
      </DisplayInfo>
    </Container>
  );
}

export default App;
