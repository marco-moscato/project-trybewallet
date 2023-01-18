// Coloque aqui suas actions
import fetchCurrencies from '../../services/fetchCurrencies';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCIES_API = 'REQUEST_CURRENCIES_API';
export const SAVE_EXCHANGE_RATE = 'SAVE_EXCHANGE_RATE';
export const ADD_EXPENSE = 'ADD_EXPENSE';

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

export const saveExchangeRate = (payload) => ({
  type: SAVE_EXCHANGE_RATE,
  payload,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: { ...expense },
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
  const currencies = Object.keys(requestAPI);
  dispatch(requestCurrenciesAPI(currencies));
};

export const addNewExpense = (expense) => async (dispatch) => {
  const requestAPI = await fetchCurrencies();
  const exchangeRate = Object.values(requestAPI);
  dispatch(saveExchangeRate(exchangeRate));
  dispatch(addExpense(expense));
};
