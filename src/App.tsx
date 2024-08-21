import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./components/NewComponent";
import { StyledButton, UseStateComponent } from "./UseStateComponent";
import { ComponentForFilter } from "./components/ComponentForFilter";
import { Button } from "./components/Button";
import * as string_decoder from "node:string_decoder";

// const topCars = [
//   { manufacturer: "BMW", model: "m5cs" },
//   { manufacturer: "Mercedes", model: "e63s" },
//   { manufacturer: "Audi", model: "rs6" },
// ];

function App() {
  type DataButtonType = {
    title: string;
    id: number;
    name?: string;
    age?: number;
  };

  const dataForButtons = [
    {
      title: "MyYouTubeChanel-1",
      id: 1,
      name: "Ann",
      age: 30,
    },
    {
      title: "MyYouTubeChanel-2",
      id: 2,
      name: "Inna",
    },
    {
      title: "Stuped Button",
      id: 3,
    },
  ];

  const buttonsFunction = (btnId: number) => {
    console.log(
      dataForButtons.filter((data: DataButtonType) => data.id === btnId),
    );
  };

  return (
    <div className="App">
      {dataForButtons.map((el: DataButtonType) => {
        return (
          <Button name={el.title} callBack={() => buttonsFunction(el.id)} />
        );
      })}

      {/*<Button name={"MyYouTubeChanel-1"} callBack={() => buttonsFunction(1)} />*/}
      {/*<Button name={"MyYouTubeChanel-2"} callBack={() => buttonsFunction(2)} />*/}
      {/*<Button name={"Stuped Button"} callBack={() => buttonsFunction(3)} />*/}
    </div>
  );
}

export default App;
