import React, { MouseEvent } from "react";
import { Button } from "./UseStateComponent";

export const ComponentForButton = (event: MouseEvent<HTMLButtonElement>) => {
  const onClickHandler = (name: string) => {
    console.log(`Hello, ${name}!`);
  };

  return (
    <>
      <Button onClick={() => onClickHandler("Ivan")}>MyYouTubeChanel-1</Button>
      <Button onClick={() => onClickHandler("Ann")}>MyYouTubeChanel-2</Button>
    </>
  );
};
