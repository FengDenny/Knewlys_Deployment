import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

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
  height: 95vh;
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
export const FullVideo = styled.video``;
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
