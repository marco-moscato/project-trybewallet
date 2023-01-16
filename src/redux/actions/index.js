// Coloque aqui suas actions
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
