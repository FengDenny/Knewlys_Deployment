import React from "react";
import {
  FormGroup,
  FormLabel,
  FormInput,
  theme,
  FormButton,
  FormContainer,
  Header,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

function UpdateEmail({ email, password, handleChange, handleEmailSubmit }) {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <FormContainer onSubmit={handleEmailSubmit}>
      <ThemeProvider theme={theme}>
        <Header
          theme={{
            headerMain: "var(--secondary-color)",
            fontSizeXLG: "var(--font-size-24)",
            top: "1px",
          }}
        >
          Update Your Email
        </Header>
        <FormGroup>
          <FormLabel htmlFor='email'>Email Address</FormLabel>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder={auth.email}
          />
        </FormGroup>
        <FormGroup>
          <FormButton
            primary
            theme={{ buttonWidth: "330px" }}
            disabled={!email}
          >
            Save Settings
          </FormButton>
        </FormGroup>
      </ThemeProvider>
    </FormContainer>
  );
}
export default UpdateEmail;
