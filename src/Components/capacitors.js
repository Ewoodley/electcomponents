import React, { Component } from "react";
import styles from "./capacitors.module.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.capacitor}>
          <h1>This page is about Capacitors</h1>
          <h3>
            Capacitors are designed to maintain a small electrical charge and
            then rapidly discharge into the circuit when necessary
          </h3>
        </div>
      </div>
    );
  }
}
