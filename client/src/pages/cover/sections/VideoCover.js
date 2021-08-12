import React, { useState } from "react";
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
import {
  openModal,
  closeModal,
  beforeClose,
  afterOpen,
  contextValue,
} from "../../../components/modal/modal";

function VideoCover() {
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState("signup");
  const [opacity, setOpacity] = useState(0);

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
                  openModal({ setModalOpen, setOpacity });
                  setActive("signup");
                }}
                primary
              >
                SIGN UP FOR FREE
              </Button>
              <Button
                onClick={() => {
                  openModal({ setModalOpen, setOpacity });
                  setActive("signin");
                }}
                secondary
              >
                SIGN IN
              </Button>
            </GridTwo>
            <SmoothScrollLink href='#vows'>
              <BounceScrollDownArrow />
            </SmoothScrollLink>
          </ThemeProvider>
        </VideoSection>
      </VideoContainer>{" "}
      <StyledModal
        isOpen={modalOpen}
        afterOpen={afterOpen({ setOpacity })}
        beforeClose={beforeClose}
        onBackgroundClick={() => {
          closeModal(setModalOpen);
        }}
        backgroundProps={{ opacity }}
      >
        <StyledCloseModal
          onClick={() => {
            closeModal(setModalOpen);
          }}
        >
          &times;
        </StyledCloseModal>

        {active === "signup" && <SignUp setActive={setActive} />}
        {active === "signin" && <SignIn setActive={setActive} />}
        {active === "forgot" && <ForgotPassword setActive={setActive} />}
        {active === "redirect" && <Redirect setActive={setActive} />}
      </StyledModal>
    </AccountContext.Provider>
  );
}
export default VideoCover;
