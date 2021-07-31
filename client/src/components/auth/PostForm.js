import React, { useContext } from "react";
import { AccountContext } from "../accountContext";
import {
  FormGroup,
  FormLabel,
  FormImageInput,
  FormTextArea,
  GridTwo,
  FormContainer,
  FormParagraph,
  theme,
  FormLink,
  FormButton,
  FormButtonUpload,
  FormSwitch,
  FormLinkSwitch,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function PostForm({}) {
  return (
    <FormContainer>
      <ThemeProvider theme={theme}>
        <FormGroup>
          <FormLabel htmlFor='body'>
            What’s the meaning behind this photo?
          </FormLabel>
          <FormTextArea
            type='text'
            name='body'
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            rows='3'
            cols='50'
            maxLength='150'
            theme={{
              marginTop: "5px",
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormImageInput
            type='file'
            name='uploadImage'
            accept='image/*'
            theme={{
              marginTop: "5px",
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormButtonUpload tertiary theme={{ buttonWidth: "400px" }}>
            Upload
          </FormButtonUpload>
        </FormGroup>{" "}
        <FormGroup>
          <FormButton primary theme={{ buttonWidth: "400px" }}>
            Post
          </FormButton>
        </FormGroup>
      </ThemeProvider>
    </FormContainer>
  );
}

export default PostForm;
