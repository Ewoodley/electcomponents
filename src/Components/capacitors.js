import React, { Component } from "react";
import CapModal from "./capmodal";
import { Header, Grid, Image } from "semantic-ui-react";
import electrolytic from "../images/electrolyticcap.jpg";
import tantalum from "../images/Tantalum Cap.jpg";
import ceramic from "../images/Ceramic Cap.jpeg";
import mica from "../images/Mica Cap.jpg";
import film from "../images/Film Cap.jpg";
import paper from "../images/paper cap.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>This page is about Capacitors</h1>
          <CapModal />
          <h3>
            Capacitors are designed to maintain a small electrical charge and
            then rapidly discharge into the circuit when necessary
          </h3>
          <Grid centered columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">Electrolytic Capacitor</Header>
                <Image
                  src={electrolytic}
                  size="small"
                  alt="Electrolytic Capacitor"
                />
                <ul>
                  <li>Construction:Aluminum Film, electrolytic soaked paper</li>
                  <li>Capacitance Rating: 1µF to 47mF</li>
                  <li>
                    Usage: Any application where a high level of capacitance is
                    needed
                  </li>
                </ul>
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">Tantalum Capacitor</Header>
                <Image src={tantalum} size="small" alt="Tantalum Capacitor" />
                <ul>
                  <li>Construction:</li>
                  <li>Capacitance Rating:</li>
                  <li>Usage:</li>
                </ul>
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">Ceramic Capacitor</Header>
                <Image src={ceramic} size="small" alt="Ceramic Capacitor" />
                <ul>
                  <li>Construction:</li>
                  <li>Capacitance Rating:</li>
                  <li>Usage:</li>
                </ul>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">Mica Capacitor</Header>
                <Image src={mica} size="small" alt="Mica Capacitor" />
                <ul>
                  <li>Construction:</li>
                  <li>Capacitance Rating:</li>
                  <li>Usage:</li>
                </ul>
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">Film Capacitor</Header>
                <Image src={film} size="small" alt="Film Capacitor" />
                <ul>
                  <li>Construction:</li>
                  <li>Capacitance Rating:</li>
                  <li>Usage:</li>
                </ul>
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">Paper Capcitor</Header>
                <Image src={paper} size="small" alt="Paper Capacitor" />
                <ul>
                  <li>Construction:</li>
                  <li>Capacitance Rating:</li>
                  <li>Usage:</li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
