// Coloque aqui suas actions
import fetchCurrencies from '../../services/fetchCurrencies';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCIES_API = 'REQUEST_CURRENCIES_API';

// Action creator
export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

export const requestCurrenciesAPI = (payload) => ({
  type: REQUEST_CURRENCIES_API,
  payload,
});

// const fetchCurrencies = () => async (dispatch) => {
//   const endPoint = 'https://economia.awesomeapi.com.br/json/all';
//   const request = await fetch(endPoint);
//   const response = await request.json();
//   const keys = Object.keys(response);
//   const filteredCurrencies = keys.filter((ele) => ele !== 'USDT');
//   dispatch(requestCurrenciesAPI(filteredCurrencies));
// };

export const displayCurrencies = () => async (dispatch) => {
  const requestAPI = await fetchCurrencies();
  const onlyKeys = Object.keys(requestAPI);
  const handleCurrencies = onlyKeys.filter((ele) => ele !== 'USDT');
  dispatch(requestCurrenciesAPI(handleCurrencies));
};
