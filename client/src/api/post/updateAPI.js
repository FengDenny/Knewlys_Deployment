import axios from "axios";

export const updateEmail = async (token, userID, data) =>
  await axios.patch(`/api/v1/user/${userID}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updatePassword = async (token, data) =>
  await axios.patch(`/api/v1/account/updatePassword`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
