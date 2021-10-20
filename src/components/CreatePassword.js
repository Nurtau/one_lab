import React, { useState } from "react";
import styled from "styled-components";

import { StyledInput } from "./StyledInput";
import { StyledButton } from "./StyledButton";
import { Caution } from "./Caution";

export const CreatePassword = () => {
  const requirements = [
    "Латинские буквы",
    "1 заглавную латинскую букву",
    "цифры от 0-9",
    "символы (#$^+=!*()@%&_?-.)",
    "запрет последовательности букв (qwerty), цифр (123456)",
  ];

  const doesRequirementsMeet = (password) => {
    if (
      password.match(/[0-9]/g) === null ||
      password.match(/[A-Z]/g) === null ||
      password.match(/[#$^+=!*()@%&_?\-.]/g) === null ||
      password.includes("12345") ||
      password.includes("qwerty") ||
      password.match(/[A-Za-z0-9#$^+=!*()@%&_?\-.]/g).length !== password.length
    ) {
      return false;
    }
    return true;
  };

  const onButtonClick = () => {
    setHasRepeatedError(false);
    if (!doesRequirementsMeet(createdPassword)) {
      setHasCreatedError(true);
      return;
    }
    setHasCreatedError(false);

    if (createdPassword !== repeatedPassword) {
      setHasRepeatedError(true);
    } else {
      setHasRepeatedError(false);
      setCreatedPassword("");
      setRepeatedPassword("");
    }
  };

  const [createdPassword, setCreatedPassword] = useState("");
  const [hasCreatedError, setHasCreatedError] = useState(false);
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [hasRepeatedError, setHasRepeatedError] = useState(false);

  return (
    <Container>
      <h2>Проверка пароля</h2>
      <h1>Пароль</h1>
      <h3>Придумайте новый пароль</h3>
      <StyledInput
        value={createdPassword}
        onChange={(e) => setCreatedPassword(e.target.value)}
        label="Придумайте пароль*"
        errorMessage="Пароль не соотвествует требованиям безопасности"
        hasError={hasCreatedError}
      />
      <StyledInput
        value={repeatedPassword}
        onChange={(e) => setRepeatedPassword(e.target.value)}
        label="Повторите пароль*"
        errorMessage="Пароль не совпадает"
        hasError={hasRepeatedError}
      />
      <ListContainer>
        <p>Пароль должен содержать: </p>
        <ul>
          {requirements.map((requirement, index) => {
            return <li key={index}>{requirement}</li>;
          })}
        </ul>
      </ListContainer>
      <Caution />
      <StyledButton onClick={onButtonClick}>Подтвердить</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 30px;
    font-size: 34px;
    font-weight: bold;
  }
  h2 {
    font-size: 14.5px;
    margin-top: 60px;
  }

  h3 {
    font-size: 16px;
    color: ${(props) => props.theme.secondary};
    margin-top: 15px;
    margin-bottom: 20px;
  }
  @media (max-width: 450px) {
    width: 100%;
    padding: 0px 8vw;
    h2 {
      display: none;
    }
    h1 {
      margin-top: 70px;
    }
  }
`;

const ListContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  p {
    font-size: 14.5px;
  }
  ul {
    margin-left: 30px;
    color: ${(props) => props.theme.secondary};
    li {
      margin: 12px 0px;
      font-size: 14.5px;
    }
  }
`;
