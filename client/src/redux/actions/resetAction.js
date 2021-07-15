/* eslint-disable import/no-anonymous-default-export */
export const setEmailReset = (email) => {
  return {
    type: "SET_EMAIL_RESET",
    email,
  };
};
