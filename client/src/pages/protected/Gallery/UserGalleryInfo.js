import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPostByUser } from "../../../api/post/postAPI";

import Gallery from "./Gallery";
import {
  Container,
  Header,
  theme,
  MiddleFlexDisplayed,
  CardGridThree,
  CardImage,
} from "../../../styled-components/globalStyled";
import { Card } from "../../../styled-components/styled.js";
import { ThemeProvider } from "styled-components";
function UserGalleryInfo() {
  // react-redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { _id, token, email } = auth;
  const beforeAt = email.split("@")[0];

  // hooks
  const [post, setPost] = useState([]);

  useEffect(() => {
    loadUserPosts();
  }, []);

  const loadUserPosts = async () => {
    const res = await getPostByUser(token, _id);
    console.log(res.data.post);
    setPost(res.data.post);
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Gallery
          MiddleFlexDisplayed={MiddleFlexDisplayed}
          Header={Header}
          post={post}
          beforeAt={beforeAt}
          CardGridThree={CardGridThree}
          theme={theme}
          Card={Card}
          CardImage={CardImage}
        />
      </ThemeProvider>
    </Container>
  );
}

export default UserGalleryInfo;
