import React, { useContext } from "react";
import { AccountContext } from "../accountContext";

import {
  FormGroup,
  FormLabel,
  FormInput,
  FormContainer,
  FormParagraph,
  theme,
  FormLink,
  FormButton,
  FormSwitch,
  FormLinkSwitch,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function SignUpForm({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,
}) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor='email'>Email Address</FormLabel>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && emailError && (
          <FormParagraph
            theme={{
              headerMain: "var(--error-color)",
              fontSizeXSmall: "var(--error-font-size)",
            }}
          >
            {emailError}
          </FormParagraph>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor='password'>Password</FormLabel>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern='(?=.*\d).{8,}'
        />
        {password && passwordError && (
          <FormParagraph
            theme={{
              headerMain: "var(--error-color)",
              fontSizeXSmall: "var(--error-font-size)",
            }}
          >
            {passwordError}
          </FormParagraph>
        )}
      </FormGroup>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormParagraph
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXSmall: "var(--font-size-xsm)",
            }}
          >
            By signing up, I agree to the Knewlys {""}
            <FormLink>Privacy Policy</FormLink> and {""}
            <FormLink>Terms of Service</FormLink>.
          </FormParagraph>
        </FormGroup>

        <FormButton
          disabled={!email || !password}
          primary
          onClick={switchToSignin}
        >
          Sign Up
        </FormButton>
        <FormGroup>
          <FormSwitch theme={{ headerMain: "var(--secondary-color)" }}>
            Have an account?
            <FormLinkSwitch onClick={switchToSignin}>Sign in</FormLinkSwitch>
          </FormSwitch>
        </FormGroup>
      </ThemeProvider>
    </FormContainer>
  );
}
export default SignUpForm;
