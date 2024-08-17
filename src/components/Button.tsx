import React, { MouseEvent } from "react";
import { StyledButton } from "../UseStateComponent";

type ButtonPropsType = {
  name: string;
  someFunction: () => void;
};

export const Button = (props: ButtonPropsType) => {
  return <StyledButton onClick={props.someFunction}>{props.name}</StyledButton>;
};
