// import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../UI/Card/Card";

export const Users = ({ users }) => {
  return (
    <Card>
      {users.map(user=>{
        return(
          <StyledPTag key={user.id}>{user.name}</StyledPTag>
        );
       })}
    </Card>
  );
};
//style 
const StyledPTag = styled.p`
    text-align: center;
`