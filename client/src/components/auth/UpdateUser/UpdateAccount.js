import React, { useState } from "react";
import {
  Container,
  HRLineMarginTop,
  theme,
  UpdateContainer,
} from "../../../styled-components/globalStyled";
import { updateEmail, updatePassword } from "../../../api/post/updateAPI";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";
import { setUserLoggedIn } from "../../../redux/actions/authAction";

function UpdateAccount() {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token, _id } = auth;
  const dispatch = useDispatch();
  // state
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [currentPassword, setCurrentPassword] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const data = { email };
    let response = await updateEmail(token, _id, data);
    console.log("Post response: ", response.data);
    dispatch(setUserLoggedIn(response.data.user));
    setValues({
      ...values,
      email: "",
    });
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    try {
      let data = { currentPassword, password };
      let response = await updatePassword(token, data);
      console.log("Post response: ", response.data);
      setValues({
        ...values,
        currentPassword: "",
        password: "",
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { email, password } = values;
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <UpdateContainer theme={{ right: "20px", position: "relative" }}>
          <UpdateEmail
            email={email}
            handleChange={handleChange}
            handleEmailSubmit={handleEmailSubmit}
          />
          <HRLineMarginTop
            theme={{
              headerMain: "var(--secondary-color)",
              marginTop: "1.5rem",
              width: "21rem",
            }}
          />
          <UpdatePassword
            password={password}
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            handleChange={handleChange}
            handlePasswordChange={handlePasswordChange}
          />
        </UpdateContainer>
      </ThemeProvider>
    </Container>
  );
}
export default UpdateAccount;
