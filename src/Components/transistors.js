import { React, Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import TransistorModal from './transistormodal';
import { transistors } from './transistorlist';

export default class Transistors extends Component {
    render() {
        return (
            <div>
                <TransistorModal />
                <h1>This page is about Transistors</h1>
                <Grid centered columns={3} divided>
                    {transistors.map(transistors => <Grid.Column key={transistors.title}>
                        <Segment>
                            <Header as="h2">{transistors.name}</Header>
                            <p>{transistors.description}</p>
                        </Segment>
                    </Grid.Column>)}
                </Grid>
            </div>
        )
    } 
}