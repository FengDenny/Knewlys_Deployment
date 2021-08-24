import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../api/post/postAPI";
import {
  Container,
  theme,
  MiddleCardFlexDisplayed,
  CardImage,
  CardSection,
  CardUserButton,
  CardGridTwo,
  DropdownButton,
} from "../../styled-components/globalStyled";
import {
  openModal,
  closeModal,
  beforeClose,
  afterOpen,
} from "../../components/modal/modal";
import { StyledModal, StyledCloseModal } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import { Card } from "../../styled-components/styled.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { setFooter } from "../../redux/actions/footerAction";
import { setPostID } from "../../redux/actions/postAction";
import PostInfo from "./PostInfo";

library.add(faUser);

function HomeProtected() {
  const { auth } = useSelector((state) => ({ ...state }));
  const [post, setPost] = useState([]);
  const [noFooter, setNoFooter] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState("postInfo");
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    loadAllPost();
    setNoFooter(true);
    dispatch(setFooter(noFooter));
  }, []);

  const loadAllPost = async () => {
    let res = await getAllPosts();
    setPost(res.data);
    console.log(res.data);
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CardSection>
          <MiddleCardFlexDisplayed
            theme={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "20vh",
            }}
          >
            <CardGridTwo theme={{ width100: "50%" }}>
              {post.data &&
                post.data.map((posts) => (
                  <Card key={posts._id}>
                    {posts.photo && posts.photo.contentType ? (
                      <>
                        <CardImage src={`/api/v1/post/photo/${posts._id}`} />
                        <CardUserButton
                          onClick={() => {
                            openModal({ setModalOpen, setOpacity });
                            setActive("postInfo");
                            dispatch(setPostID(posts._id));
                          }}
                          theme={{
                            bottom: "30px",
                            color: "var(--primary-color)",
                            left: "50%",
                          }}
                        >
                          <FontAwesomeIcon icon={faUser} size='1x' />
                        </CardUserButton>
                      </>
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
            </CardGridTwo>
          </MiddleCardFlexDisplayed>
        </CardSection>
      </ThemeProvider>
      <StyledModal
        isOpen={modalOpen}
        afterOpen={afterOpen({ setOpacity })}
        beforeClose={beforeClose}
        onBackgroundClick={() => {
          closeModal(setModalOpen);
        }}
        backgroundProps={{ opacity }}
      >
        {active === "postInfo" && <PostInfo />}
      </StyledModal>
    </Container>
  );
}
export default HomeProtected;
