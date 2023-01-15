// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: [],
  expenses: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  return state;
};

export default walletReducer;
