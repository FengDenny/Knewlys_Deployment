/* eslint-disable import/no-anonymous-default-export */

const INITIAL_STATE = {};

const footerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_FOOTER":
      return action.payload;
    default:
      return state;
  }
};

export default footerReducer;
