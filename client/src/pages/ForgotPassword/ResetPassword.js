import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  theme,
  Container,
  MiddleFlexDisplayed,
  FormSubmitButton,
  FormGroup,
  FormInput,
  FormLabel,
  HeaderStart,
} from "../../styled-components/globalStyled";

import { ThemeProvider } from "styled-components";

function ResetPassword({ match }) {
  const [password, setPassword] = useState("");
  const history = useHistory();

  const passwordReset = (e) => {
    setPassword(e.target.value);
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    const token = match.params.token;
    console.log(token);
    const url = `/api/v1/auth/resetPassword/${token}`;
    const data = { password };
    await axios
      .patch(url, data)
      .then((response) => {
        console.log(response.data.message);
        setPassword("");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MiddleFlexDisplayed theme={{ alignItems: "center" }}>
          <HeaderStart
            theme={{
              modalHeader: "var(--form-header-color)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Reset your password
          </HeaderStart>

          <FormGroup>
            <FormLabel
              htmlFor='password'
              theme={{ formLabelColor: "var(--form-label-white-gray-color)" }}
            >
              Password
            </FormLabel>
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={passwordReset}
              theme={{ inputWidth: "360px" }}
            />
          </FormGroup>
          <FormGroup>
            <FormSubmitButton
              green
              theme={{ buttonWdith: "360px" }}
              onClick={resetPassword}
            >
              Reset Password
            </FormSubmitButton>
          </FormGroup>
        </MiddleFlexDisplayed>
      </ThemeProvider>
    </Container>
  );
}
export default ResetPassword;
