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
        <Option value="Black - 0Ω " />
        <Option value="Brown - 1Ω" />
        <Option value="Red - 2Ω" />
        <Option value="Orange - 3Ω" />
        <Option value="Yellow - 4Ω" />
        <Option value="Green - 5Ω" />
        <Option value="Blue - 6Ω" />
        <Option value="Violet - 7Ω" />
        <Option value="Grey - 8Ω" />
        <Option value="White - 9Ω" />
      </Dropdown>
      <Dropdown
        formLabel="Band 2 color"
        onChange={handleSelect}
        value={state.band2}
      >
        <Option value="" />
        <Option value="Black - 0Ω " />
        <Option value="Brown - 1Ω" />
        <Option value="Red - 2Ω" />
        <Option value="Orange - 3Ω" />
        <Option value="Yellow - 4Ω" />
        <Option value="Green - 5Ω" />
        <Option value="Blue - 6Ω" />
        <Option value="Violet - 7Ω" />
        <Option value="Grey - 8Ω" />
        <Option value="White - 9Ω" />
      </Dropdown>
      <Dropdown
        formLabel="Band 3 color - Multiplier"
        onChange={handleSelect}
        value={state.band3}
      >
        <Option value="" />
        <Option value="Black - *1" />
        <Option value="Brown - *10" />
        <Option value="Red - *100" />
        <Option value="Orange - *1,000" />
        <Option value="Yellow - *10,000" />
        <Option value="Green - *100,000" />
        <Option value="Blue - *1,000,000" />
        <Option value="Violet - *10,000,000" />
        <Option value="Gold - *.1" />
        <Option value="Silver - *.01" />
      </Dropdown>
      <Dropdown
        formLabel="Band 4 color - Tolerance"
        onChange={handleSelect}
        value={state.band4}
      >
        <Option value="" />
        <Option value="none - 20%" />
        <Option value="Brown - 1%" />
        <Option value="Green - .5%" />
        <Option value="Blue - .25%" />
        <Option value="Violet - .1%" />
        <Option value="Grey - .05%" />
        <Option value="Gold - 5%" />
        <Option value="Silver -  10%" />
      </Dropdown>
     
    </div>
  );

}
