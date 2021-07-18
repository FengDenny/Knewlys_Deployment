import React, { useEffect } from "react";
import gallery from "../../../images/Gallery.png";
import {
  Section,
  theme,
  Header,
  GallerySectionGrid,
  MiddleFlexDisplayed,
  Container,
  ParagraphWidth,
  GallerySectionImage,
  GalleryBG,
  MediaFlexDisplay,
  GalleryFlexDisplay,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  leftVariants,
  rightVariants,
  fadeUpVariants,
  fadeDownVariants,
} from "../../../framer-motion/variants/variants";

function Gallery() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Section>
      <GalleryBG initial='hidden' animate={controls} ref={ref}>
        <Container>
          <ThemeProvider theme={theme}>
            <GallerySectionGrid>
              <MediaFlexDisplay
                theme={{ width50: "95%", height100: "50vh" }}
                variants={leftVariants}
              >
                <Header
                  theme={{
                    headerMain: "var(--white-color)",
                    fontSizeXLG: "var(--font-size-48)",
                    fontWeight: "bolder",
                    width50: "90%",
                  }}
                >
                  Your greatest moments in single gallery.
                </Header>
                <ParagraphWidth
                  theme={{
                    paragraphWidth: "434px",
                    headerMain: "rgba(255, 255, 255, 0.83)",
                    lineHeight: "26px",
                    padding: "7px 0 0 0",
                  }}
                >
                  Reminisce the past with your own gallery. Store your wedding
                  memories to never forget the perfect past, including your
                  vows.
                </ParagraphWidth>
              </MediaFlexDisplay>
              <GalleryFlexDisplay
                theme={{ width50: "95%", height100: "50vh" }}
                variants={rightVariants}
              >
                <GallerySectionImage src={gallery} alt='gallery' />
              </GalleryFlexDisplay>
            </GallerySectionGrid>
          </ThemeProvider>
        </Container>
      </GalleryBG>
    </Section>
  );
}

export default Gallery;
