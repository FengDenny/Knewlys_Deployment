import React from "react";
import {
  Container,
  GridTwo,
  theme,
  FooterHeader,
  FooterDisplay,
  UL,
  FooterLI,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <FooterDisplay theme={{ height: "10vh" }}>
      <Container>
        <ThemeProvider theme={theme}>
          <div>
            <FooterHeader theme={{ fontSizeXLG: "var(--font-size-sm)" }}>
              © 2021 Knewlys
            </FooterHeader>
            <UL>
              <FooterLI theme={{ fontSizeXLG: "var(--font-size-xsm)" }}>
                <NavLink
                  activeStyle={{
                    borderBottom: "1px solid #fff",
                    color: "#fff",
                  }}
                  exact
                  to='/'
                >
                  Terms
                </NavLink>
              </FooterLI>
              <FooterLI theme={{ fontSizeXLG: "var(--font-size-xsm)" }}>
                <NavLink
                  activeStyle={{
                    borderBottom: "1px solid #fff",
                    color: "#fff",
                  }}
                  exact
                  to='/'
                >
                  Privacy
                </NavLink>
              </FooterLI>
            </UL>
          </div>
        </ThemeProvider>
      </Container>
    </FooterDisplay>
  );
}
export default Footer;
