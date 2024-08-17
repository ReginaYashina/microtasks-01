import React from "react";

type carsType = {
  manufacturer: string;
  model: string;
};

type newComponentType = {
  // info:Array<carsType>
  info: carsType[];
};

export const NewComponent = (props: newComponentType) => {
  const { info } = props;
  return (
    <table>
      <tbody>
        {info.map((car, index) => {
          return (
            <tr key={index + 1}>
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
