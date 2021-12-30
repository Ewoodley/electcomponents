import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import DiodeModal from "./diodemodal";
import led from "../images/LED.jpg";
import schottky from "../images/Schottky Diode.jpg";
import pn from "../images/PN Diode.jpg";
import zener from "../images/Zener Diode.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>This page is about Diodes</h1>
        <DiodeModal />
        <Grid centered columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Light-Emitting Diode</Header>
              <Image src={led} size="small" alt="light-emitting diode" />
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Shottky Diode</Header>
              <Image src={schottky} size="small" alt="schottky diode" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Zener Diode</Header>
              <Image src={zener} size="small" alt="zener diode" />
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">PN Diode</Header>
              <Image src={pn} size="small" alt="pn diode" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
