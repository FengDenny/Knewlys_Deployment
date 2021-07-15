/* eslint-disable import/no-anonymous-default-export */
export const setUserLoggedIn = (userObj) => {
  return {
    type: "SET_USER_LOGGED_IN",
    payload: userObj,
  };
};

export const setUserLoggedOut = (logout) => {
  return {
    type: "SET_USER_LOGGED_OUT",
    payload: logout,
  };
};
