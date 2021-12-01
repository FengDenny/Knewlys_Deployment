import React, { useContext } from "react";
import { AccountContext } from "../accountContext";
import {
  FormGroup,
  FormLabel,
  FormInput,
  GridTwo,
  ForgotPassword,
  FormContainer,
  FormParagraph,
  theme,
  FormLink,
  FormButton,
  FormSwitch,
  FormLinkSwitch,
  Error,
  Banner,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function SignInForm({
  handleSubmit,
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  setActive,
  showBanner,
  bannerError,
}) {
  const { switchToSignup, switchToForgotPassword } = useContext(AccountContext);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <FormGroup>
          {showBanner ? (
            <FormLabel
              theme={{
                formBackgroundColor: "red",
                // width: "450px",
                bottom: "85px",
                right: " 73px",
                width: "144%",
              }}
            >
              <Error
                theme={{ alignSelf: "center", bottom: "7px", color: "#fff" }}
              >
                {bannerError}
              </Error>
            </FormLabel>
          ) : null}
        </FormGroup>
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
          <GridTwo>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <ForgotPassword
              onClick={() => {
                switchToForgotPassword(setActive);
              }}
            >
              Forgot password?
            </ForgotPassword>
          </GridTwo>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <FormGroup>
          <FormParagraph
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXSmall: "var(--font-size-xsm)",
            }}
          >
            By signing in, I agree to the Knewlys{" "}
            <FormLink>Privacy Policy</FormLink> and{" "}
            <FormLink>Terms of Service</FormLink>.
          </FormParagraph>
        </FormGroup>
        <FormGroup>
          <FormButton primary>Sign In</FormButton>
        </FormGroup>
        <FormGroup>
          <FormSwitch theme={{ headerMain: "var(--secondary-color)" }}>
            Need an account?{" "}
            <FormLinkSwitch
              onClick={() => {
                switchToSignup(setActive);
              }}
            >
              Sign Up Free
            </FormLinkSwitch>
          </FormSwitch>
        </FormGroup>
      </ThemeProvider>
    </FormContainer>
  );
}
export default SignInForm;
