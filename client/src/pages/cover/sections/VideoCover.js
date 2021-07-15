import React, { useState } from "react";
import throwingFlower from "../../../images/video_cover/throwingFlowers.mp4";
import weddingCeremony from "../../../images/video_cover/fan_wedding.mp4";
import { smoothScrolling } from "../../../components/js/smoothScrolling";
import {
  VideoContainer,
  Video,
  VideoSection,
  StyledModal,
  StyledCloseModal,
  FullVideo,
  Source,
  SmoothScrollLink,
} from "../../../styled-components/styled";

import {
  Header,
  theme,
  Paragraph,
  Button,
  GridTwo,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import SignUp from "../../auth/Signup";
import SignIn from "../../auth/Signin";
import ForgotPassword from "../../auth/ForgotPassword";
import BounceScrollDownArrow from "../components/BounceScrollDownArrow";
import Redirect from "../../ForgotPassword/Redirect";
import { AccountContext } from "../../../components/accountContext";

function VideoCover() {
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState("signup");
  const [opacity, setOpacity] = useState(0);

  const switchToSignup = () => {
    setTimeout(() => {
      setActive("signup");
    }, 200);
  };

  const switchToSignin = () => {
    setTimeout(() => {
      setActive("signin");
    }, 200);
  };

  const switchToForgotPassword = () => {
    setTimeout(() => {
      setActive("forgot");
    }, 200);
  };

  const switchToRedirect = () => {
    setTimeout(() => {
      setActive("redirect");
    }, 200);
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    switchToForgotPassword,
    switchToRedirect,
  };

  const openModal = () => {
    setOpacity(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {smoothScrolling()}
      <VideoContainer>
        <Video>
          <FullVideo autoPlay='autoplay' loop='loop' muted>
            <Source src={weddingCeremony} type='video/mp4' />
          </FullVideo>
        </Video>
        <VideoSection>
          {/* Change the color theme using ThemeProvider  */}
          <ThemeProvider theme={theme}>
            <Header
              theme={{
                headerMain: "var(--white-color)",
                fontSizeXLG: "84px",
                paragraphRight: "5px",
              }}
            >
              Knewlys
            </Header>
            <Paragraph>
              A perfect wedding has unforgettable moments, that includes
              Knewlys.
            </Paragraph>
            <GridTwo>
              <Button
                onClick={() => {
                  openModal();
                  setActive("signup");
                }}
                primary
              >
                SIGN UP FOR FREE
              </Button>
              <Button
                onClick={() => {
                  openModal();
                  setActive("signin");
                }}
                secondary
              >
                SIGN IN
              </Button>
              <StyledModal
                isOpen={modalOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={closeModal}
                backgroundProps={{ opacity }}
              >
                <StyledCloseModal onClick={closeModal}>
                  &times;
                </StyledCloseModal>

                {active === "signup" && <SignUp />}
                {active === "signin" && <SignIn />}
                {active === "forgot" && <ForgotPassword />}
                {active === "redirect" && <Redirect />}
              </StyledModal>
            </GridTwo>
            <SmoothScrollLink href='#vows'>
              <BounceScrollDownArrow />
            </SmoothScrollLink>
          </ThemeProvider>
        </VideoSection>
      </VideoContainer>
    </AccountContext.Provider>
  );
}
export default VideoCover;
