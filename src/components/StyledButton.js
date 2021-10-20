import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";


export const StyledButton = ({ onClick, children }) => {

  return (
      <ButtonStyled disableRipple onClick={onClick}>
        <p>{children}</p>
      </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)`
  && {
    color: white;
    background-color: #EE1D75;
    padding: 0.6rem 3.4rem;
    font-size: 11px;
    border-radius: 12px;
    font-weight: bold;
    text-transform: none;
    transition: all 0.3s ease;
    margin-bottom: 20px;
    &:hover {
      background-color: #ee1d7434;
    }

    @media (max-width: 450px) {
      padding: 0.8rem 5rem;
      font-size: 16px;
    }
  }
`;
