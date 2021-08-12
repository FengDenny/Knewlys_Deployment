import React, { useState, useContext } from "react";
import { AccountContext } from "../../components/accountContext";
import axios from "axios";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import { useDispatch } from "react-redux";
import { setEmailReset } from "../../redux/actions/resetAction";
import {
  theme,
  Container,
  MidHeader,
  ParagraphWidth,
  MiddleFlexHeight,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function ForgotPassword({ setActive }) {
  const [email, setEmail] = useState("");
  const { switchToRedirect } = useContext(AccountContext);
  const dispatch = useDispatch();

  const resetAccount = (e) => {
    setEmail(e.target.value);
  };

  const submitReset = async (e) => {
    e.preventDefault();
    const url = "/api/v1/auth/forgotPassword";
    const data = { email };
    await axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        dispatch(setEmailReset(data.email));
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MiddleFlexHeight>
          <MidHeader
            theme={{
              modalHeader: "var(--form-header-color)",
              alignSelf: "center",
              fontSize: "var(--font-size-24)",
            }}
          >
            Forgot password?
          </MidHeader>
          <ParagraphWidth
            theme={{
              headerMain: "var(--secondary-color)",
              paragraphWidth: "398px",
              marginLeft: "23px",
            }}
          >
            Enter your registered email address to reset your password.
          </ParagraphWidth>
          <ForgotPasswordForm
            submitReset={submitReset}
            resetAccount={resetAccount}
            email={email}
            switchToRedirect={switchToRedirect}
            setActive={setActive}
          />
        </MiddleFlexHeight>
      </ThemeProvider>
    </Container>
  );
}
export default ForgotPassword;
