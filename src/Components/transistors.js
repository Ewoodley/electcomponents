import { React, Component } from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
import { transistors } from "./transistorlist";
import TransistorModal from "./transistormodal";

export default class Transistor extends Component {
  render() {
    return (
      <div>
        <TransistorModal />
        <h1>This Page is about Transistors</h1>
        <Grid centered columns={3} divided>
          {transistors.map((transistors) => (
            <Grid.Column key={transistors.title}>
              <Segment>
                <Header as="h2">{transistors.name}</Header>
                <p>{transistors.description}</p>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}
