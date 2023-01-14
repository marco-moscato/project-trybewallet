// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

// Action creator
export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});
