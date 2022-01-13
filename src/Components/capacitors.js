import React, { Component } from "react";
import CapModal from "./capmodal";
import { Segment, Header, Grid, Image } from "semantic-ui-react";
import { caps } from "./caplist";

export default class Capacitors extends Component {
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
            {caps.map((caps) => (
              <Grid.Column key={caps.title}>
                <Segment>
                  <Header as="h2">{caps.name}</Header>
                  <Image src={caps.image} size="small" alt={caps.name} />
                  <p>{caps.description}</p>
                  <p>{caps.capacitance}</p>
                </Segment>
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
