import React, { useContext } from "react";
import { AccountContext } from "../accountContext";
import {
  FormGroup,
  FormLabel,
  FormInput,
  GridTwo,
  ForgotPasswordLink,
  FormContainer,
  FormParagraph,
  theme,
  FormLink,
  FormButton,
  FormSwitch,
  FormLinkSwitch,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function SignInForm({ handleSubmit, email, setEmail, password, setPassword }) {
  const { switchToSignup, switchToForgotPassword } = useContext(AccountContext);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormLabel htmlFor='email'>Email Address</FormLabel>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <GridTwo>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <ForgotPasswordLink onClick={switchToForgotPassword}>
              Forgot password?
            </ForgotPasswordLink>
          </GridTwo>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            <FormLinkSwitch onClick={switchToSignup}>
              Sign Up Free
            </FormLinkSwitch>
          </FormSwitch>
        </FormGroup>
      </ThemeProvider>
    </FormContainer>
  );
}
export default SignInForm;
