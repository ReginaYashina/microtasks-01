import React, { useState } from "react";
import { StyledButton } from "../UseStateComponent";
import { FilterType } from "./ComponentForFilter";

type NewMoneyArrayType = {
  banknote: string;
  nominal: number;
  number: string;
};
type NewMoneyType = {
  newCurrentMoney: Array<NewMoneyArrayType>;
  onClickFilterHandler: (value: FilterType) => void;
};

export const NewComponentForFilter = (props: NewMoneyType) => {
  return (
    <ul style={{ listStyleType: "none", textAlign: "left" }}>
      {props.newCurrentMoney.map((objFromMoneyArr, index) => {
        return (
          <>
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          </>
        );
      })}
      <StyledButton onClick={() => props.onClickFilterHandler("all")}>
        all
      </StyledButton>
      <StyledButton onClick={() => props.onClickFilterHandler("dollar")}>
        dollar
      </StyledButton>
      <StyledButton onClick={() => props.onClickFilterHandler("ruble")}>
        ruble
      </StyledButton>
    </ul>
  );
};
