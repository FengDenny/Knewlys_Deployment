import React, { useState, useEffect } from "react";
import {
  MiddleFlexDisplayed,
  Container,
  Header,
  theme,
  Span,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setFooter } from "../../../redux/actions/footerAction";

function UserProfile() {
  const { auth } = useSelector((state) => ({ ...state }));
  const beforeAt = auth.createdAt.split("T");
  const [noFooter, setNoFooter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    checkFooter();
  }, []);

  const checkFooter = () => {
    setNoFooter(false);
    dispatch(setFooter(noFooter));
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MiddleFlexDisplayed
          theme={{
            flexDirection: "column",
          }}
        >
          <Header
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXLG: "var(--font-size-lg)",
              paragraphRight: "20px",
            }}
          >
            Email:
            <Span
              theme={{
                headerMain: "var(--primary-color)",
                fontSizeXLG: "var(--font-size-md)",
                paragraphLeft: "10px",
                fontWeight: "100",
              }}
            >
              {auth.email}
            </Span>
          </Header>
          <Header
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXLG: "var(--font-size-lg)",
              paragraphRight: "20px",
              top: "10px",
            }}
          >
            Created:
            <Span
              theme={{
                headerMain: "var(--primary-color)",
                fontSizeXLG: "var(--font-size-md)",
                paragraphLeft: "10px",
                fontWeight: "100",
              }}
            >
              {beforeAt[0]}
            </Span>
          </Header>
        </MiddleFlexDisplayed>
      </ThemeProvider>
    </Container>
  );
}

export default UserProfile;
