import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

// media queries

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const height = {
  mobileM: "667px",
  mobileL: "896px",
};

export const MediaHeight = (key) => {
  return (style) => `@media (max-height: ${height[key]}){${style}}`;
};

export const MediaQueries = (key) => {
  return (style) => `@media (max-width: ${size[key]}){${style}}`;
};

// App.js Styled
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const AppContent = styled.div`
  flex: 1 0 auto;
  padding: var(--space-one) var(--space-two) 0;
  width: 100%;
`;

// Home.js Styled
export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  // create a curve border for video
  height: 76vh;
  overflow: hidden;
  /* (first radius values) / top-left | top-right | bottom-right | bottom-left */
  border-radius: 50% 50%/ 0 0 20% 20%;
  &:after {
    content: "";
    /*  absolute position from parent of .video because of its position relative */
    position: absolute;
    /* put the overlay in the corner position and spread across the video */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--content-overlay);
  }

  ${MediaQueries("laptop")`
    height:42vh;
  `}

  ${MediaQueries("mobileL")`
    height:31vh;
  `}
   ${MediaQueries("mobileM") &&
  MediaHeight("mobileL")`
    height:26vh;
  `}
  ${MediaHeight("mobileM")`
    height:32vh;
  `}
`;
export const Video = styled(VideoContainer)`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;
  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;
  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const FullVideo = styled.video`
  width: 100vw;
  height: 100%;
`;
export const Source = styled.source``;
export const SmoothScrollLink = styled.a`
  color: var(--white-color);
`;

export const VideoSection = styled.div`
  color: var(--white-color);
  z-index: 1;
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 478px;

  ${MediaQueries("mobileL")`
  width: 286px;
`}
`;
export const StyledModal = Modal.styled`

  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  border-radius:5px; 
`;
export const StyledCloseModal = styled.span`
  position: relative;
  bottom: 5px;
  left: 420px;
  font-size: 50px;
  color: var(--secondary-color);
  cursor: pointer;
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
