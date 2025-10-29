import { fetchCryptoCurrency } from './fetchCryptoCurrencyAPI';

export const handleCrytoAPICall = async (cryptoCurrency, currency) => {
  try {
    const { RAW } = await fetchCryptoCurrency(cryptoCurrency, currency);
    const key = Object.keys(RAW);
    const data = RAW[key];
    const dataKey = Object.keys(data);
    const cryptoData = data[dataKey];
    return cryptoData;
  } catch (error) {
    throw new Error('There was an Error calling crypto API');
  }
};
