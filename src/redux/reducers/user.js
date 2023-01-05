// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  username: [],
};

const userReducer = (state = initialState, action) => {
  console.log('State: ', state);
  console.log('Action: ', action);
  return state;
};

export default userReducer;
