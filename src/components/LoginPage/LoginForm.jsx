import { Card } from "../UI/Card/Card";
import styled from "styled-components";
import { Button } from "../UI/Button/Button";
import { useEffect, useState } from "react";
export const LoginForm = ({loginHandler}) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPasswod] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    setFormIsValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsEmailValid(enteredEmail.includes("@"));
  };
  const passwordChangeHandler = (event) => {
    setEnteredPasswod(event.target.value);
    setIsPasswordValid(enteredPassword.trim().length > 6);
  };
  return (
    <Card>
      <form action="">
        <InputContainer>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
            id="email"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            id="password"
          />
        </InputContainer>
        <StyledBtnContainer>
          <Button bagColor={"success"} 
          disabled={!formIsValid}
           onClick={loginHandler}>
            Login
            </Button>
        </StyledBtnContainer>
      </form>
    </Card>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: 600;
`;
const StyledInput = styled.input`
  padding: 5px 10px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;
`;
const StyledBtnContainer = styled.div`
  width: 100%;
  text-align: center;
`;
