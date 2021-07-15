/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
  email: "",
};

const resetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_EMAIL_RESET":
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};

export default resetReducer;
