import styled from "styled-components";
import { Navigation } from "./Navigation/Navigation";

export const Header = ({ isAuthenticated,loginHandler, timer }) => {
  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
  { isAuthenticated &&  <Navigation loginHandler={loginHandler} timer={timer}/> }
    </StyledHeader>
  );
};
//style
const StyledHeader = styled.header`
  padding: 20px 20px;
  background-color: #5f0f5f;
  color: white;
  display: flex;
  justify-content: space-between;
`;
