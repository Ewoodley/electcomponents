import React, { Component } from "react";
import { Segment, Grid, Image, Header } from "semantic-ui-react";
import {diodes} from './diodelist'

export default class Diodes extends Component {
  render() {
    return (
      <div>
        <h1>This page is about Diodes</h1>
        
        <h2>A diode use a simple electronic compment that is use to regulate current and voltage in a circuit</h2>
        
        <Grid centered columns={2} divided>
        {diodes.map(diodes =>
                    <Grid.Column key={diodes.title}>
                        <Segment> 
                          <Header as="h2">{diodes.name}</Header>
                          <Image src={diodes.image} size="small" alt={diodes.name} />
                          <p>{diodes.description}</p>
                        
                        </Segment>
              </Grid.Column>)}
        </Grid>
      </div>
    );
  }
}
