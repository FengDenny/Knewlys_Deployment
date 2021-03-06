import React, { useEffect } from "react";
import locationMap from "../../../images/cover/location_map.svg";
import {
  theme,
  Header,
  WeddingLocationGrid,
  MiddleFlexDisplayed,
  Container,
  ParagraphWidth,
  WeddingSectionImage,
  WeddingSection,
  WeddingMotion,
  WeddingLocationDescription,
  MediaFlexDisplay,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeUpVariants,
  fadeDownVariants,
  leftVariants,
  rightVariants,
} from "../../../framer-motion/variants/variants";

function WeddingLocations() {
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
    <ThemeProvider theme={theme}>
      <WeddingSection>
        <Container>
          <WeddingMotion initial='hidden' animate={controls} ref={ref}>
            <WeddingLocationGrid>
              <MiddleFlexDisplayed
                theme={{
                  width50: "95%",
                  height100: "50vh",
                  flexDirection: "column",
                }}
                variants={fadeUpVariants}
              >
                <WeddingSectionImage src={locationMap} alt='wedding' />
              </MiddleFlexDisplayed>
              <MediaFlexDisplay
                theme={{
                  width50: "95%",
                  height100: "50vh",
                  flexDirection: "column",
                }}
                variants={fadeDownVariants}
              >
                <WeddingLocationDescription>
                  <Header
                    theme={{
                      headerMain: "var(--primary-color)",
                      fontSizeXLG: "var(--font-size-48)",
                      fontWeight: "bolder",
                      width50: "100%",
                    }}
                  >
                    Browse weddings
                  </Header>
                  <ParagraphWidth
                    theme={{
                      paragraphWidth: "450px",
                      headerMain: "var(--secondary-color)",
                      lineHeight: "26px",
                      padding: "7px 0 0 0",
                    }}
                  >
                    Ready to put a ring on it, but cannot decide a perfect
                    venue? Knewlys got you covered! Take a look at other people
                    galleries to see their venue location!
                  </ParagraphWidth>
                </WeddingLocationDescription>
              </MediaFlexDisplay>
            </WeddingLocationGrid>{" "}
          </WeddingMotion>
        </Container>
      </WeddingSection>
    </ThemeProvider>
  );
}

export default WeddingLocations;
