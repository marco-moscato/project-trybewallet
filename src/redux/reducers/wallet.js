// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES_API } from '../actions';
import { ADD_EXPENSE } from '../actions';
import { SAVE_EXCHANGE_RATE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRate: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES_API:
    return {
      ...state,
      currencies: action.payload,
    };

  case SAVE_EXCHANGE_RATE:
    return {
      ...state,
      exchangeRate: [...state.exchangeRate, action.payload],
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  default:
    return state;
  }
};

export default walletReducer;
