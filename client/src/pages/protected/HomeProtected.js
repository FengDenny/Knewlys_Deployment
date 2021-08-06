import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../api/post/postAPI";
import {
  Container,
  theme,
  MiddleCardFlexDisplayed,
  GridTwo,
  CardImage,
  CardSection,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { Card } from "../../styled-components/styled.js";

function HomeProtected() {
  const { auth } = useSelector((state) => ({ ...state }));
  const [post, setPost] = useState([]);

  useEffect(() => {
    loadAllPost();
  }, []);

  const loadAllPost = async () => {
    let res = await getAllPosts();
    setPost(res.data);
  };

  return (
    <Container>
      {" "}
      <ThemeProvider theme={theme}>
        <CardSection>
          <MiddleCardFlexDisplayed
            theme={{
              flexDirection: "row",
              alignItems: "center",
              height100: "60vh",
              marginTop: "200px",
            }}
          >
            <GridTwo theme={{ width100: "50%" }}>
              {post.data &&
                post.data.map((posts) => (
                  <Card key={posts._id}>
                    {posts.photo && posts.photo.contentType ? (
                      <CardImage src={`/api/v1/post/photo/${posts._id}`} />
                    ) : (
                      <CardImage
                        src={
                          "https://res.cloudinary.com/dis7ep3yq/image/upload/v1607809957/1024px-No_image_available.svg_p8eu6x.png"
                        }
                        alt='default image'
                      />
                    )}
                  </Card>
                ))}
            </GridTwo>
          </MiddleCardFlexDisplayed>
        </CardSection>
      </ThemeProvider>
    </Container>
  );
}
export default HomeProtected;
