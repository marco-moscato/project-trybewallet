// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  wallet: [],
};

const walletReducer = (state = initialState, action) => {
  console.log('State: ', state);
  console.log('Action: ', action);
  return state;
};

export default walletReducer;
