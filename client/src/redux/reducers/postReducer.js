/* eslint-disable import/no-anonymous-default-export */

const INITIAL_STATE = {};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_POST_ID":
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
