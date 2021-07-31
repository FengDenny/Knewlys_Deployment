import React, { useState, useEffect, useRef } from "react";
import PostForm from "../../../components/auth/PostForm";
import {
  MidHeader,
  theme,
  Container,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setUserLoggedIn } from "../../redux/actions/authAction";

function Post() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MidHeader theme={{ modalHeader: "var(--form-header-color)" }}>
          Post Photo
        </MidHeader>
        <PostForm />
      </ThemeProvider>
    </Container>
  );
}
export default Post;
