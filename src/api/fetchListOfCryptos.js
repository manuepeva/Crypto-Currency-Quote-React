import axios from 'axios';

export const fetchListOfCryptos = async () => {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
  try {
    const resultado = await axios.get(url);
    return resultado;
  } catch (error) {
    throw new Error('There was no list of crypto currencies / There was an error');
  }
};
