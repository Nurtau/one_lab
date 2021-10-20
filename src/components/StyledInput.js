import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledInput = ({
  label,
  value,
  onChange,
  hasError,
  errorMessage,
}) => {
  return (
    <>
      <StyledTextField
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        margin="normal"
        fullWidth
        size="small"
        color="primary"
        error={hasError}
      />
      {hasError ? (
        <ErrorMessage>
          <p>{errorMessage}</p>
        </ErrorMessage>
      ) : (
        <Margin></Margin>
      )}
    </>
  );
};

const StyledTextField = styled(TextField)`
  & input:valid + fieldset {
    border-color: #664d8fa6;
    border-radius: 10px;
  }
  & input:valid + fieldset::placeholder {
    color: white;
  }
  && {
    margin-bottom: 0rem;
    input {
      height: 35px;
      padding-left: 12px;
    }
  }
`;

const Margin = styled.div`
  height: 1rem;
`;

const ErrorMessage = styled.div`
  width: 100%;
  height: 1rem;
  @media (max-width: 450px) {
    height: 1.5rem;
  }
  p {
    margin-top: 2px;
    font-size: 14px;
    color: red;
    font-weight: lighter;
  }
`;
