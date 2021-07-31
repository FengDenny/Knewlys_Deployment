import React from "react";
import {
  MiddleFlexDisplayed,
  Container,
  Header,
  theme,
  Span,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
function UserProfile() {
  const { auth } = useSelector((state) => ({ ...state }));
  const beforeAt = auth.createdAt.split("T");

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MiddleFlexDisplayed>
          <Header
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXLG: "var(--font-size-lg)",
            }}
          >
            Email:
            <Span
              theme={{
                headerMain: "var(--primary-color)",
                fontSizeXLG: "var(--font-size-lg)",
                paragraphLeft: "10px",
              }}
            >
              {auth.email}
            </Span>
          </Header>
          <Header
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXLG: "var(--font-size-lg)",
            }}
          >
            Created:
            <Span
              theme={{
                headerMain: "var(--primary-color)",
                fontSizeXLG: "var(--font-size-lg)",
                paragraphLeft: "10px",
              }}
            >
              {beforeAt[0]}
            </Span>
          </Header>
        </MiddleFlexDisplayed>{" "}
      </ThemeProvider>
    </Container>
  );
}

export default UserProfile;
