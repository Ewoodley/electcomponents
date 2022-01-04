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
     
    </div>
  );

}
