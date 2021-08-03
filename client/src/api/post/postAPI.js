import axios from "axios";

export const createPost = async (token, userID, data) =>
  await axios.post(`/api/v1/post/${userID}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
