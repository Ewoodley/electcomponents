import React, { useState } from "react";
import { Dropdown, Option } from "./dropdown";
/*import styles from './resistors.modules.css'
 */

export default function App() {
  const [state, setState] = useState({
    band1: "",
    band2: "",
    band3: "",
    band4: "",
  });

  function handleSelect(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
    console.log(value);
  }
  return (
    <div style={{ backgroundColor: "	#F5F5DC" }}>
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

      <Dropdown
        formLabel="Band 1 color"
        onChange={handleSelect}
        value={state.band1}
      >
        <Option value="" />
        <Option value="Black" />
        <Option value="Brown" />
        <Option value="Red" />
        <Option value="Orange" />
        <Option value="Yellow" />
        <Option value="Green" />
        <Option value="Blue" />
        <Option value="Violet" />
        <Option value="Grey" />
        <Option value="White" />
      </Dropdown>
      <Dropdown
        formLabel="Band 2 color"
        onChange={handleSelect}
        value={state.band2}
      >
        <Option value="" />
        <Option value="Black" />
        <Option value="Brown" />
        <Option value="Red" />
        <Option value="Orange" />
        <Option value="Yellow" />
        <Option value="Green" />
        <Option value="Blue" />
        <Option value="Violet" />
        <Option value="Grey" />
        <Option value="White" />
      </Dropdown>
      <Dropdown
        formLabel="Band 3 color"
        onChange={handleSelect}
        value={state.band3}
      >
        <Option value="" />
        <Option value="Black" />
        <Option value="Brown" />
        <Option value="Red" />
        <Option value="Orange" />
        <Option value="Yellow" />
        <Option value="Green" />
        <Option value="Blue" />
        <Option value="Violet" />
        <Option value="Grey" />
        <Option value="White" />
        <Option value="Gold" />
        <Option value="Silver" />
      </Dropdown>
      <Dropdown
        formLabel="Band 4 color"
        onChange={handleSelect}
        value={state.band4}
      >
        <Option value="" />
        <Option value="Black" />
        <Option value="Brown" />
        <Option value="Green" />
        <Option value="Blue" />
        <Option value="Violet" />
        <Option value="Grey" />
        <Option value="Gold" />
        <Option value="Silver" />
      </Dropdown>
      <p>
        Resistor value is: {(ohms1 + ohms2) * ohms3}, tolerance:
        {tolerance}
      </p>
    </div>
  );
  function ohms1() {
    if (this.band1 === "Black") {
      this.band1 = 0;
    } else if (this.band1 === "Brown") {
      this.band1 = 1;
    } else if (this.band1 === "Red") {
      this.band1 = 2;
    } else if (this.band1 === "Orange") {
      this.band1 = 3;
    } else if (this.band1 === "Yellow") {
      this.band1 = 4;
    } else if (this.band1 === "Green") {
      this.band1 = 5;
    } else if (this.band1 === "Blue") {
      this.band1 = 6;
    } else if (this.band1 === "Violet") {
      this.band1 = 7;
    } else if (this.band1 === "Gray") {
      this.band1 = 8;
    } else if (this.band1 === "White") {
      this.band1 = 9;
    } else this.band1 = 0;
  }
  function ohms2() {
    if (this.band2 === "Black") {
      this.band2 = 0;
    } else if (this.band2 === "Brown") {
      this.band2 = 1;
    } else if (this.band2 === "Red") {
      this.band2 = 2;
    } else if (this.band2 === "Orange") {
      this.band2 = 3;
    } else if (this.band2 === "Yellow") {
      this.band2 = 4;
    } else if (this.band2 === "Green") {
      this.band2 = 5;
    } else if (this.band2 === "Blue") {
      this.band2 = 6;
    } else if (this.band2 === "Violet") {
      this.band2 = 7;
    } else if (this.band2 === "Gray") {
      this.band2 = 8;
    } else if (this.band2 === "White") {
      this.band2 = 9;
    } else this.band2 = 0;
  }
  function ohms3() {
    if (this.band3 === "Black") {
      this.band3 = 1;
    } else if (this.band3 === "Brown") {
      this.band3 = 10;
    } else if (this.band3 === "Red") {
      this.band3 = 100;
    } else if (this.band3 === "Orange") {
      this.band3 = 1000;
    } else if (this.band3 === "Yellow") {
      this.band3 = 10000;
    } else if (this.band3 === "Green") {
      this.band3 = 100000;
    } else if (this.band3 === "Blue") {
      this.band3 = 1000000;
    } else if (this.band3 === "Violet") {
      this.band3 = 10000000;
    } else if (this.band3 === "Gray") {
      this.band3 = 100000000;
    } else if (this.band3 === "White") {
      this.band3 = 1000000000;
    } else if (this.band3 === "Gold") {
      this.band3 = 0.1;
    } else if (this.band3 === "Silver") {
      this.band3 = 0.01;
    }
  }
  function tolerance() {
    if (this.band4 === "Black") {
      this.band4 = "1%";
    } else if (this.band4 === "Red") {
      this.band4 = "2%";
    } else if (this.band4 === "Green") {
      this.band4 = "0.5%";
    } else if (this.band4 === "Blue") {
      this.band4 = ".25%";
    } else if (this.band4 === "Violet") {
      this.band4 = "0.1%";
    } else if (this.band4 === "Gray") {
      this.band4 = "0.05%";
    } else if (this.band4 === "Gold") {
      this.band4 = "5%";
    } else if (this.band4 === "Silver") {
      this.band4 = "10%";
    } else this.band4 = "20%";
  }
}
