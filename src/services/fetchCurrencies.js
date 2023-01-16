import { requestCurrenciesAPI } from '../redux/actions';

const fetchCurrencies = () => async (dispatch) => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(endPoint);
  const response = await request.json();
  const keys = Object.keys(response);
  const filteredCurrencies = keys.filter((ele) => ele !== 'USDT');
  dispatch(requestCurrenciesAPI(filteredCurrencies));
};

export default fetchCurrencies;
