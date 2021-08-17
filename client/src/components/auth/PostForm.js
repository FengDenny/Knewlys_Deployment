import React, { useContext } from "react";
import { AccountContext } from "../accountContext";
import {
  FormGroup,
  FormLabel,
  FormImageInput,
  FormTextArea,
  FormContainer,
  theme,
  FormButton,
  FormButtonUpload,
  FormImagePreview,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function PostForm({
  handleImages,
  fileURL,
  hiddenFileInput,
  handlePostSubmit,
  handleChange,
  handleSubmit,
  body,
}) {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        {fileURL ? (
          <FormGroup>
            <FormImagePreview src={fileURL} alt='images' />
          </FormGroup>
        ) : null}
        <FormGroup>
          <FormLabel htmlFor='body'>
            What’s the meaning behind this photo?
          </FormLabel>
          <FormTextArea
            type='text'
            name='body'
            value={body}
            onChange={handleChange}
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
            name='photo'
            accept='image/*'
            ref={hiddenFileInput}
            onChange={handleImages}
            theme={{
              marginTop: "5px",
              display: "none",
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormButtonUpload
            tertiary
            theme={{ buttonWidth: "400px" }}
            onClick={handlePostSubmit}
          >
            Upload
          </FormButtonUpload>
        </FormGroup>
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
