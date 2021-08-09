import React, { useEffect } from "react";
import wedding from "../../../images/cover/wedding.svg";
import love from "../../../images/cover/love.svg";
import {
  VowsSection,
  theme,
  Header,
  VowsSectionGrid,
  MiddleFlexDisplayed,
  Container,
  VowSectionSpan,
  VowSectionImage,
} from "../../../styled-components/globalStyled";
import { opacityVariants } from "../../../framer-motion/variants/variants";

import { ThemeProvider } from "styled-components";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Vows() {
  // Animations START
  const { ref, inView } = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!inView) {
      controls.start("hidden");
    }
  }, [inView, controls]);
  // Animations END
  return (
    <VowsSection
      id='vows'
      initial='hidden'
      animate={controls}
      ref={ref}
      variants={opacityVariants}
    >
      {" "}
      <ThemeProvider theme={theme}>
        <Container>
          <VowsSectionGrid>
            <MiddleFlexDisplayed
              theme={{
                width50: "95%",
                height100: "50vh",
                flexDirection: "column",
              }}
            >
              <VowSectionImage src={wedding} alt='wedding' />
            </MiddleFlexDisplayed>

            <MiddleFlexDisplayed
              theme={{ height100: "50vh", marginTop: "200px" }}
            >
              <Header
                theme={{
                  headerMain: "var(--primary-color)",
                  fontSizeXLG: "var(--font-size-lg)",
                  flexDirection: "column",
                }}
              >
                Never forget your vows.
              </Header>
            </MiddleFlexDisplayed>
          </VowsSectionGrid>
          <VowsSectionGrid>
            <MiddleFlexDisplayed
              theme={{ width50: "76%", height100: "50vh", marginTop: "150px" }}
            >
              <Header
                theme={{
                  headerMain: "var(--primary-color)",
                  fontSizeXLG: "var(--font-size-lg)",
                }}
              >
                Also, the real reason why you both said
                <VowSectionSpan> “I do”</VowSectionSpan>.
              </Header>
            </MiddleFlexDisplayed>
            <MiddleFlexDisplayed
              theme={{ height100: "55vh", flexDirection: "column" }}
            >
              <VowSectionImage
                src={love}
                alt='love'
                theme={{ bottom: "50px" }}
              />
            </MiddleFlexDisplayed>
          </VowsSectionGrid>
        </Container>
      </ThemeProvider>
    </VowsSection>
  );
}
export default Vows;
