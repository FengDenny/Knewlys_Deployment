import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPost } from "../../api/post/postAPI";
import {
  PostContainer,
  theme,
  PostImage,
  HeaderBottomPostion,
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
    console.log(response.data);
  };

  return (
    <PostContainer>
      <ThemeProvider theme={theme}>
        {
          postData && (
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
            </>
          )
          //   {/* <h2>ID: {postData.data.body}</h2> */}
        }
      </ThemeProvider>
    </PostContainer>
  );
}
export default PostInfo;
