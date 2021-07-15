import React, { useState, useEffect, useRef } from "react";
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
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const dispatch = useDispatch();

  const history = useHistory();

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (email) {
      emailFormValidation();
    }
    if (password) {
      passwordFormValidation();
    }
  }, [email, password]);

  const emailFormValidation = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "") {
      setEmailError("Email address is required. ");
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError(null);
    }
  };

  const passwordFormValidation = () => {
    const passwordRegex = /^(?=.*\d).{8,}$/;

    if (password === "") {
      setPasswordError("Password is required.");
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError(null);
    }
  };

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
          emailError={emailError}
          passwordError={passwordError}
        />
      </ThemeProvider>
    </Container>
  );
}
export default Signin;
