import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Segment, Divider } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';
import About from '../LandingPage/TeamAboutCards';

export default class TransitionContainer7 extends Component {
    state = { visible: false }

    toggleVisibility = () => {
        console.log("Consider me toggled");
    this.setState({ visible: true });
    }


    render() {
        const { visible } = this.state

        return(
            <Container>
                <Visibility
                    once={false}
                    onTopVisible={this.toggleVisibility}>
                    <Transition visible={visible} animation='fade up' duration={1500}>
                        <Grid container  stackable verticalAlign="middle">   
                        <Segment style={{ padding: "0em" }} vertical>
                            <Grid celled="internally" columns="equal" stackable>
                                <Grid.Row textAlign="center">
                                <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                                    <Header as="h3" style={{ fontSize: "2em" }}>
                                    Find Us On These Shelves: 
                                    </Header>
                                    <p style={{ fontSize: "1.33em" }}>
                                    - Our Supermarket Partners
                                    </p>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        </Grid>
                    </Transition>
                </Visibility>
            </Container>

        );
    };
}