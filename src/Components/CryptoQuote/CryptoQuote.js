import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ResultadoDiv = styled.div`
  color: #1c1a1aff;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
`;

const Parrafos = styled.p`
  font-size: 18px;
  color: #000000ff;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const CryptoQuote = ({ cryptoData }) => {
  const { t } = useTranslation();
  const {
    PRICE = 0,
    HIGHDAY = 0,
    LOWDAY = 0,
    CHANGEPCT24HOUR = 0,
    LASTUPDATE = 0,
  } = cryptoData;
  if (Object.keys(cryptoData).length === 0) {
    return null;
  }

  return (
    <ResultadoDiv>
      <Precio>
        {t("criptoName")}: {cryptoData.FROMSYMBOL}
      </Precio>
      <Precio>
        {t("priceIs")}: <span>{PRICE.toFixed(2)}</span>
      </Precio>
      <Parrafos>
        {t("highDayIs")}: <span>{HIGHDAY.toFixed(2)}</span>
      </Parrafos>
      <Parrafos>
        {t("lowDayIs")}: <span>{LOWDAY.toFixed(2)}</span>
      </Parrafos>
      <Parrafos>
        {t("change24hIs")}: <span>{CHANGEPCT24HOUR.toFixed(2)}</span>
      </Parrafos>
      <Parrafos>
        {t("lastUpdateIs")}: <span>{LASTUPDATE.toFixed(2)}</span>
      </Parrafos>
    </ResultadoDiv>
  );
};

CryptoQuote.propTypes = {
  cryptoData: PropTypes.object.isRequired,
};

export default CryptoQuote;
