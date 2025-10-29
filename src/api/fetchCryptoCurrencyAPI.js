import axios from 'axios';

const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';

export const fetchCryptoCurrency = async (cryptoCurrency, currency) => {
  try {
    const response = await axios.get(`${url}${cryptoCurrency}&tsyms=${currency}`);
    return response.data;
  } catch (error) {
    throw new Error('There was an error calling the crypto API');
  }
};
