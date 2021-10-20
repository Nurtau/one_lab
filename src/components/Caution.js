import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

export const Caution = () => {
  return (
    <CautionContainer>
      <div>
        <AlertBorder>
          <Alert icon={faExclamation} />
        </AlertBorder>
      </div>
      <p>
        Введенный пароль будет являться паролем для выпущенной ЭЦП. <br />
        Запомните введенные данные!
      </p>
    </CautionContainer>
  );
};

const CautionContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;

  border: ${props => "1px solid " + props.theme.secondary};
  border-radius: 8px;
  padding: 15px;

  p {
    font-size: 12px;
    font-weight: lighter;
    color: ${props => props.theme.secondary};
  }

  @media (max-width: 450px) {
    padding: 20px;
    p {
      font-size: 14px;
    }
`;

const AlertBorder = styled.div`
  width: 20px;
  height: 20px;
  border: ${props => "1.5px solid " + props.theme.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-top: 5px;
`;

const Alert = styled(FontAwesomeIcon)`
  color: ${props => props.theme.secondary};
  width: 8px;
  height: 8px;
  rotate: 180deg;
`;
