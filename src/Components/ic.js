import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import Icmodal from './icmodal'
import Fivepinout from "./555modal";
import SN70npinout from "./sn74modal";
import fiveic from "..//images/555IC.jpg";
import sn70n from "..//images/sn7400n.jpg";
import LM339N from "..//images/LM339N.jpg";
import LM3Pinout from "./lm339modal";

export default class App extends Component {
  render() {
    return (
      <div>
        <Icmodal />
        <h1>This page is about Integrated Circuits</h1>
        <Grid centered columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Header> 555 Timer Integrated Circuit</Header>
              <Image src={fiveic} size="small" alt="555 Integrated Circuit" />
              <p>The 555 Timer IC is very common logic circuit used to control circuit times, generally for displays or lighting controllers</p>
              <Fivepinout />
            </Grid.Column>
            <Grid.Column>
              <Header>SN7400N Logic Integrated Circuit</Header>
              <Image
                src={sn70n}
                size="small"
                alt="SN7400N Integrated Circuit"
              />
              <p> The SN7400N Logic IC is NAND logic circuit where in the function of the IC is controlled by user implimented NAND logic gates</p>
              <SN70npinout />
            </Grid.Column>
            <Grid.Column>
              <Header>LM339N Integrated Circuit</Header>
              <Image
                src={LM339N}
                size="small"
                alt="LM339N Integrated Circuit"
              />
              <p>The LM339N is a comparator IC. It is used to compare multiple input voltages which then determine what the output voltage is.</p>
              <LM3Pinout />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
