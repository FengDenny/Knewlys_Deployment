import React, { useState, useEffect } from "react";
import {
  MidHeader,
  theme,
  Container,
  MiddleFlexDisplayed,
  Paragraph,
  Button,
  BodyBackground,
  HeaderStart,
  HeaderStartMargin,
} from "../../styled-components/globalStyled";

import { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";

function AccountActivation({ match }) {
  const [values, setValues] = useState({
    email: "",
    token: "",
    show: true,
  });
  const history = useHistory();

  useEffect(() => {
    // App.js path='/auth/activate/:token'
    const token = match.params.token;
    let { email } = jwt.decode(token);
    if (token) {
      setValues({ ...values, email, token });
    }
  }, []);

  const { email, token, show } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/v1/auth/account-activation";
    const data = { token };
    await axios
      .post(url, data)
      .then((response) => {
        console.log("ACCOUNT ACTIVATED: ", response.data.message);
        setValues({ ...values, show: false });
        if (response.data.status === "success") {
          setTimeout(() => {
            window.location.replace("/");
          }, 2500);
        }
      })
      .catch((err) => {
        console.log("ACCOUNT ACTIVATED ERROR: ", err.response.data.message);
        window.location.replace("/");
      });
  };

  return (
    <BodyBackground className='activate'>
      <Container>
        <ThemeProvider theme={theme}>
          <MiddleFlexDisplayed>
            <HeaderStart
              theme={{
                modalHeader: "var(--form-header-color)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              Account Activation
            </HeaderStart>
            <Paragraph
              theme={{ headerMain: "var(--form-header-color" }}
              className='paragraph'
            >
              Hello, {email}. Please activate your account to get started!
            </Paragraph>
            <Button onClick={handleSubmit} className='button'>
              Activate Account
            </Button>
          </MiddleFlexDisplayed>
        </ThemeProvider>
      </Container>
    </BodyBackground>
  );
}
export default AccountActivation;
