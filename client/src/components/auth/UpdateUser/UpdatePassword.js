import React from "react";
import {
  FormGroup,
  FormLabel,
  FormInput,
  theme,
  FormButton,
  Header,
  FormContainer,
  MarginTop,
} from "../../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
function UpdatePassword({
  password,
  currentPassword,
  handleChange,
  handlePasswordChange,
  setCurrentPassword,
}) {
  return (
    <FormContainer onSubmit={handlePasswordChange}>
      <Header
        theme={{
          headerMain: "var(--secondary-color)",
          fontSizeXLG: "var(--font-size-24)",
          top: "10px",
        }}
      >
        Update Your Password
      </Header>
      <MarginTop theme={{ marginTop: "10px" }}>
        <FormGroup>
          <FormLabel htmlFor='cpassword'>Current Password</FormLabel>
          <FormInput
            type='password'
            name='cpassword'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='password'>Confirm Your Password</FormLabel>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormButton
            primary
            theme={{ buttonWidth: "330px" }}
            disabled={!currentPassword || !password}
          >
            Save Password
          </FormButton>
        </FormGroup>
      </MarginTop>
    </FormContainer>
  );
}
export default UpdatePassword;
