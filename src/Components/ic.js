import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import Fivepinout from "./555modal";
import SN70npinout from "./sn74modal";
import fiveic from "../images/555IC.jpg";
import sn70n from "../images/sn7400n.jpg";
import LM339N from "../images/LM339N.jpg";
import LM3Pinout from "./lm339modal";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>This page is about Microcontrollers</h1>
        <Grid centered columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Header> 555 Timer Integrated Circuit</Header>
              <Image src={fiveic} size="small" alt="555 Integrated Circuit" />
              <Fivepinout />
            </Grid.Column>
            <Grid.Column>
              <Header>SN7400N Logic Integrated Circuit</Header>
              <Image
                src={sn70n}
                size="small"
                alt="SN7400N Integrated Circuit"
              />
              <SN70npinout />
            </Grid.Column>
            <Grid.Column>
              <Header>LM339N Integrated Circuit</Header>
              <Image
                src={LM339N}
                size="small"
                alt="LM339N Integrated Circuit"
              />
              <LM3Pinout />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
