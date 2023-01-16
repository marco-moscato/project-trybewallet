// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES_API } from '../actions';

const INITIAL_STATE = {
  wallet: [],
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES_API:
    return {
      ...state,
      currencies: action.payload,
    };

  default:
    return state;
  }
};

export default walletReducer;
