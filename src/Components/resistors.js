import React from "react";
import { Dropdown } from "semantic-ui-react";
import { ohms } from "./ohms";
import { multiplier } from "./multiplier";
import { tolerance } from "./tolerance";

export default function Resistors() {
  return (
    <div>
      <h1>This page is about Resistors</h1>
      <p>
        Resistors, at the most basic, limit the amount of current flowing
        through a circuit
      </p>
      <p>
        To determine which end to read from, the end with the largest gap
        between bands is the bottom of the resistor
      </p>
      <p>Use the following chart to determine the value of the resistor:</p>

      <Dropdown placeholder="Band 1 color" fluid selection options={ohms} />

      <Dropdown placeholder="Band 2 color" fluid selection options={ohms} />

      <Dropdown
        placeholder="Band 3 color - Multiplier"
        fluid
        selection
        options={multiplier}
      />
      <Dropdown
        placeholder="Band 4 color - Tolerance"
        fluid
        selection
        options={tolerance}
      />
    </div>
  );
}
