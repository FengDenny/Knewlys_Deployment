import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPost } from "../../api/post/postAPI";
import {
  PostContainer,
  theme,
  PostImage,
  HeaderBottomPostion,
  Paragraph,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function PostInfo() {
  const { post } = useSelector((state) => ({ ...state }));
  const [postData, setPostData] = useState("");

  useEffect(() => {
    loadPostInfo();
  }, []);

  const loadPostInfo = async () => {
    let response = await getPost(post);
    setPostData(response.data);
  };

  return (
    <PostContainer>
      <ThemeProvider theme={theme}>
        {postData && (
          <>
            <PostImage
              src={`/api/v1/post/photo/${postData.data._id}`}
              alt={postData.data.body}
            />
            <HeaderBottomPostion
              theme={{
                headerMain: "var(--secondary-color)",
                fontSizeXLG: "var(--font-size)",
                left: "5px",
                bottom: "60px",
              }}
            >
              {postData.data.body}
            </HeaderBottomPostion>
            <Paragraph
              theme={{
                headerMain: "var(--secondary-color)",
                bottom: "62px",
                padding: "0 10px 0 0",
                position: "absolute",
                right: "0",
              }}
            >
              {/*  grab the date before T */}
              {postData.data.created.split("T")[0]}
            </Paragraph>
          </>
        )}
      </ThemeProvider>
    </PostContainer>
  );
}
export default PostInfo;
