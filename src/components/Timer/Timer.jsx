import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../UI/Card/Card";

export const Timer = () => {
  const [time, setTime] = useState(0 * 60);
  const minutes = time / 60;
  const seconds = time - minutes * 60;
  useEffect(() => {
    const interval = setInterval(() => {
        setTime((time) => (time >= 1 ? time - 1 : 0));
    });
    return()=>(
        clearInterval(interval)
    )
  }, []);

  return (
    <Card>
      <StyledTimer>Timer:{time}</StyledTimer>
    </Card>
  );
};
//style
const StyledTimer = styled.h2`
  text-align: center;
`;
