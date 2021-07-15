import React, { useState } from "react";
import SigninForm from "../../components/auth/SignInForm";
import {
  MidHeader,
  theme,
  Container,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../redux/actions/authAction";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/v1/auth/signin";
    const data = { email, password };

    await axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        console.log("MESSAGE: ", response.data.message);
        // save user data to redux
        dispatch(setUserLoggedIn(response.data.user));
        history.push("/");
        // window.location.replace("/test");
      })
      .catch((error) => {
        console.log("SIGN IN ERROR: ", error.response.data.message);
      });
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MidHeader theme={{ modalHeader: "var(--form-header-color)" }}>
          Sign In
        </MidHeader>
        <SigninForm
          handleSubmit={handleSubmit}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </ThemeProvider>
    </Container>
  );
}
export default Signin;
