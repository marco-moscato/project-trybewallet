// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: [],
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  console.log(action);
  return state;
};

export default walletReducer;
