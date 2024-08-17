import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./components/NewComponent";
import { StyledButton, UseStateComponent } from "./UseStateComponent";
import { ComponentForFilter } from "./components/ComponentForFilter";
import { Button } from "./components/Button";

// const topCars = [
//   { manufacturer: "BMW", model: "m5cs" },
//   { manufacturer: "Mercedes", model: "e63s" },
//   { manufacturer: "Audi", model: "rs6" },
// ];

function App() {
  const foo1 = (name: string, age: number, city: string) => {
    console.log(`Hi! I am ${name}! I am ${age}. I am from ${city}`);
  };
  const foo2 = (name: string) => {
    console.log(`Hi! I am ${name}!`);
  };
  const foo3 = () => {
    console.log("Stuped Button");
  };

  return (
    <div className="App">
      {/*<NewComponent info={topCars} />*/}
      {/*<UseStateComponent />*/}
      {/*<ComponentForFilter />*/}
      <Button
        name={"MyYouTubeChanel-1"}
        someFunction={() => foo1("Ann", 35, "Minsk")}
      />
      <Button name={"MyYouTubeChanel-2"} someFunction={() => foo2("Nina")} />
      <Button name={"Stuped Button"} someFunction={foo3} />
    </div>
  );
}

export default App;
