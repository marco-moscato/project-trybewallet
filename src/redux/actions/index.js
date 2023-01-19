// Coloque aqui suas actions
import fetchCurrencies from '../../services/fetchCurrencies';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

// Action creator
export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

export const requestCurrencies = () => async (dispatch) => {
  const requestAPI = await fetchCurrencies();
  const currencies = Object.keys(requestAPI);
  dispatch({
    type: REQUEST_CURRENCIES,
    payload: currencies,
  });
};

export const addExpense = (expense) => async (dispatch) => {
  const requestAPI = await fetchCurrencies();
  dispatch({
    type: ADD_EXPENSE,
    payload: { ...expense, exchangeRates: { ...requestAPI } },
  });
};
