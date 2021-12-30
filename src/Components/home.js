import React from "react";
import { Component } from "react/cjs/react.production.min";
import { Image, Header, Grid } from "semantic-ui-react";
import Kohm from "../images/10K resistor.jpg";
import Capacitors from "../images/capacitors.png";
import LEDs from "../images/LEDs.jpg";
import Five from "../images/555IC.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Grid centered columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header>Resistors</Header>
              <Image src={Kohm} as="a" size="small" href="/Resistors" />
            </Grid.Column>
            <Grid.Column>
              <Header>Diodes</Header>
              <Image src={LEDs} as="a" size="small" href="/Diodes" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header>Capacitors</Header>
              <Image src={Capacitors} as="a" size="small" href="/Capacitors" />
            </Grid.Column>
            <Grid.Column>
              <Header>Integrated Circuit</Header>
              <Image src={Five} as="a" size="small" href="/IC" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
