import React, { useState } from "react";
import { NewComponentForFilter } from "./NewComponentForFilter";

export type FilterType = "all" | "dollar" | "ruble";

export const ComponentForFilter = () => {
  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");

  let currentMoney = money;

  if (filter === "dollar") {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === "dollar",
    );
  }

  if (filter === "ruble") {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === "ruble",
    );
  }

  const onClickFilterHandler = (btnName: FilterType) => {
    setFilter(btnName);
  };

  return (
    <NewComponentForFilter
      newCurrentMoney={currentMoney}
      onClickFilterHandler={onClickFilterHandler}
    />
  );
};
