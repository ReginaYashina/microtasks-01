import React from "react";
import styled from "styled-components";

export const UseStateComponent = () => {
  let [counter, setCounter] = React.useState(0);
  const changeCounterValue = () => {
    setCounter(++counter);
    console.log(counter);
  };

  const returnToZero = () => {
    setCounter((counter = 0));
  };
  return (
    <div>
      <p>{counter}</p>
      <StyledButton onClick={changeCounterValue}>next</StyledButton>
      <StyledButton onClick={returnToZero}>zero</StyledButton>
    </div>
  );
};

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(41, 121, 60, 0.6);
  margin-top: 20px;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  //text-transform: uppercase;
  padding: 10px;

  & + & {
    margin-left: 10px;
  }
`;
