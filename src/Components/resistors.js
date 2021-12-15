import React, { Component } from "react";
/*import styles from './resistors.modules.css'
 */
export default class App extends Component {
  render() {
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
        <br></br>
        <select name="selectList" id="selectList">
          <option value="band 1">Band 1</option>
          <option value="band 2">Band 2</option>
          <option value="band 3">Band 3</option>
          <option value="band 4">Band 4</option>
        </select>
      </div>
    );
  }
}
