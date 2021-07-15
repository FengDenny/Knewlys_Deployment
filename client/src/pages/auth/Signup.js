import React, { useState, useEffect, useRef } from "react";
import SignupForm from "../../components/auth/SignUpForm";
import {
  MidHeader,
  theme,
  Container,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("Dfeng6@mail.ccsf.edu");
  const [password, setPassword] = useState("123456aA!");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    emailFormValidation();
    passwordFormValidation();
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
    const url = "/api/v1/auth/signup";
    const data = { email, password };
    await axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        console.log("Message: ", response.data.message);
      })
      .catch((error) => {
        console.log("SIGNUP ERROR: ", error.response.data.message);
      });
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MidHeader theme={{ modalHeader: "var(--form-header-color)" }}>
          Sign Up Knewlys
        </MidHeader>
      </ThemeProvider>

      <SignupForm
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        emailError={emailError}
        passwordError={passwordError}
      />
    </Container>
  );
}
export default Signup;
