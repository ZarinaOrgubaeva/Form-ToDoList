import { useState } from "react";
import styled from "styled-components";
import { Timer } from "../../Timer/Timer";
import { Button } from "../../UI/Button/Button";

export const Navigation = ({loginHandler, timer}) => {

  return (
    <nav>
      <StyledNavList>
        <li>
          <Button>Users</Button>{""}
        </li>
        <li>
        <Button onClick={timer}>Timer</Button> 
        </li>
        <li> 
          <Button onClick={loginHandler}>Logout</Button>{" "}
        </li>
      </StyledNavList>
    </nav>
  );
};

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  width: 400px;
  justify-content: space-around;
`
    
