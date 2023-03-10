// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, ADD_EXPENSE, DELETE_EXPENSE,
  EDIT_EXPENSE, SAVE_EDITED_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      editor: !state.editor,
      idToEdit: action.payload.id,
    };

  case SAVE_EDITED_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
      editor: false,

    };

  default:
    return state;
  }
};

export default walletReducer;
