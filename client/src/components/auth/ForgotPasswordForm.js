import React, { useContext } from "react";
import { AccountContext } from "../accountContext";

import {
  theme,
  FormContainer,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
  FormSwitch,
  FormLinkSwitch,
} from "../../styled-components/globalStyled";

import { ThemeProvider } from "styled-components";

function ForgotPasswordForm({ submitReset, resetAccount, email, setActive }) {
  const { switchToSignin, switchToRedirect } = useContext(AccountContext);
  return (
    <FormContainer onSubmit={submitReset}>
      <ThemeProvider theme={theme}>
        <FormGroup theme={{ marginLeft: "20px" }}>
          <FormLabel htmlFor='email'>Email Address</FormLabel>
          <FormInput
            type='email'
            name='email'
            vlaue={email}
            onChange={resetAccount}
            theme={{ inputWidth: "335px" }}
          />
        </FormGroup>
        <FormGroup theme={{ marginLeft: "20px" }}>
          <FormButton
            primary
            onClick={() => {
              switchToRedirect(setActive);
            }}
          >
            Send
          </FormButton>
        </FormGroup>
        <FormGroup>
          <FormSwitch
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXSmall: "var(--font-size)",
            }}
          >
            Don't need a reset?
            <FormLinkSwitch
              onClick={() => {
                switchToSignin(setActive);
              }}
              theme={{ marginTop: "1px", marginLeft: "2px" }}
            >
              Sign in
            </FormLinkSwitch>
          </FormSwitch>
        </FormGroup>
      </ThemeProvider>
    </FormContainer>
  );
}
export default ForgotPasswordForm;
