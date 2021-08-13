import axios from "axios";

export const createPost = async (token, userID, data) =>
  await axios.post(`/api/v1/post/${userID}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getAllPosts = async () => await axios.get("/api/v1/post");

export const getPost = async (postID) =>
  await axios.get(`/api/v1/post/${postID}`);
