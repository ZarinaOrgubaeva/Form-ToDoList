
import styled from "styled-components";

export const Card = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
padding: 20px 25px;
margin: 30px auto;
  width: 480px;
  border-radius: 20px;
  -webkit-box-shadow: -1px 1px 9px 14px rgba(81, 84, 86, 0.2);
  -moz-box-shadow: -1px 1px 9px 14px rgba(81, 84, 86, 0.2);
  box-shadow: -1px 1px 9px 14px rgba(81, 84, 86, 0.2);
`;
