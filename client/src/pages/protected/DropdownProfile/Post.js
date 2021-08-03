import React, { useState, useRef } from "react";
import PostForm from "../../../components/auth/PostForm";
import {
  MidHeader,
  theme,
  Container,
  HRLine,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { createPost } from "../../../api/post/postAPI";
import { useSelector } from "react-redux";

function Post() {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token, _id } = auth;
  // state
  const [values, setValues] = useState({
    body: "",
    photo: "",
  });
  const { body, photo } = values;
  const [fileURL, setFileURL] = useState(null);
  // ref
  const hiddenFileInput = useRef(null);

  // form handles function
  const handleSubmit = async (e) => {
    e.preventDefault();
    let postData = new FormData();
    postData.append("body", body);
    photo && postData.append("photo", photo);
    console.log(...postData);
    let response = await createPost(token, _id, postData);
    console.log("Post response: ", response);
  };

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlePostSubmit = async (e) => {
    hiddenFileInput.current.click();
    e.preventDefault();
  };

  const handleImages = (e) => {
    setFileURL(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, photo: e.target.files[0] });
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MidHeader theme={{ modalHeader: "var(--form-header-color)" }}>
          Post Photo
        </MidHeader>
        <HRLine theme={{ headerMain: "#C4C4C4" }} />
        <PostForm
          handleImages={handleImages}
          fileURL={fileURL}
          hiddenFileInput={hiddenFileInput}
          handlePostSubmit={handlePostSubmit}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          body={body}
        />
      </ThemeProvider>
    </Container>
  );
}
export default Post;
