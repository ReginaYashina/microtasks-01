import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./NewComponent";
import { Button, UseStateComponent } from "./UseStateComponent";
import { ComponentForFilter } from "./ComponentForFilter";
import { ComponentForButton } from "./ComponentForButton";

// const topCars = [
//   { manufacturer: "BMW", model: "m5cs" },
//   { manufacturer: "Mercedes", model: "e63s" },
//   { manufacturer: "Audi", model: "rs6" },
// ];

function App() {
  const onClickHandler = (name: string) => {
    console.log(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <Button onClick={() => onClickHandler("Ivan")}>MyYouTubeChanel-1</Button>
      <Button onClick={() => onClickHandler("Ann")}>MyYouTubeChanel-2</Button>

      {/*<NewComponent info={topCars} />*/}
      {/*<UseStateComponent />*/}
      {/*<ComponentForFilter />*/}
      {/*<ComponentForButton />*/}
    </div>
  );
}

export default App;
