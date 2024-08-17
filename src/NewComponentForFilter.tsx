import React, { useState } from "react";
import { Button } from "./UseStateComponent";
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
      <Button onClick={() => props.onClickFilterHandler("all")}>all</Button>
      <Button onClick={() => props.onClickFilterHandler("dollar")}>
        dollar
      </Button>
      <Button onClick={() => props.onClickFilterHandler("ruble")}>ruble</Button>
    </ul>
  );
};
