/* eslint-disable import/no-anonymous-default-export */

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_LOGGED_IN":
      return action.payload;
    case "SET_USER_LOGGED_OUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
