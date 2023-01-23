// Coloque aqui suas actions
import fetchCurrencies from '../../services/fetchCurrencies';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDITED_EXPENSE = 'SAVE_EDITED_EXPENSE';

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

export const deleteExpense = (id) => (dispatch) => {
  dispatch({
    type: DELETE_EXPENSE,
    payload: id,
  });
};

export const editExpense = (expense) => (dispatch) => {
  dispatch({
    type: EDIT_EXPENSE,
    payload: expense,
  });
};

export const saveEditedExpense = (newArrayExpenses) => (dispatch) => {
  dispatch({
    type: SAVE_EDITED_EXPENSE,
    payload: newArrayExpenses,
  });
};
