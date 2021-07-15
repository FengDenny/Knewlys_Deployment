import React, { useContext } from "react";
import { AccountContext } from "../../components/accountContext";
import {
  theme,
  Container,
  MiddleFlexHeight,
  ParagraphWidth,
  MidHeader,
  HeaderStartMarginPosition,
  FormLink,
  ParagraphSpan,
} from "../../styled-components/globalStyled";

import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

function Redirect() {
  const { switchToSignin } = useContext(AccountContext);
  const { reset } = useSelector((state) => ({ ...state }));
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MiddleFlexHeight>
          <MidHeader
            theme={{
              modalHeader: "var(--form-header-color)",
              fontSize: "var(--font-size-md)",
              headerMain: "var(--white-color)",
            }}
          >
            Password reset received!
          </MidHeader>
          <ParagraphWidth
            theme={{
              headerMain: "var(--secondary-color)",
              paragraphRight: "0px",
              paragraphWidth: "450px",
            }}
          >
            Your password link has been sent to
            {reset.email ? (
              <ParagraphSpan>{reset.email}</ParagraphSpan>
            ) : (
              <ParagraphSpan>your email</ParagraphSpan>
            )}
            . Please click the link to set your new password.
          </ParagraphWidth>
          <HeaderStartMarginPosition
            theme={{
              modalHeader: "var(--form-header-color)",
              fontSize: "var(--font-size-sm)",
            }}
          >
            Didn’t receive the email yet?
            <FormLink
              onClick={switchToSignin}
              theme={{
                textDecoration: "none",
                marginLeft: "5px",
                marginTop: "0",
              }}
            >
              Resend Link
            </FormLink>
          </HeaderStartMarginPosition>
        </MiddleFlexHeight>
      </ThemeProvider>
    </Container>
  );
}
export default Redirect;
