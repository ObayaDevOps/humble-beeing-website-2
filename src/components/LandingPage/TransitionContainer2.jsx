import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Image, Divider, Responsive } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';


export default class TransitionContainer2 extends Component {
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
                    <Transition visible={visible} animation='fade up' duration={4500}>
                        <Grid container fluid stackable verticalAlign="middle" style={{ minHeight: '75vh' }} >
                                <Grid.Column mobile={16} tablet={16} computer={6}>
                                    <Header as="h2" style={{ fontSize: "3.1em", color: "#bf9000" }}>
                                    We Produce Fine Ugandan Honey
                                    </Header>
                                    <p style={{ fontSize: "1.33em" }}>
                                    With 7 years of beekeeping experience under his belt, Amos, our Head of Beekeeping knows a thing or two about making delicious honey.
                                    The Bee population in Uganda is thriving and with diverse and dense forage, Ugandan honey is like none other.              
                                    </p>
                                    <p style={{ fontSize: "1.8em", color: "#bf9000" }}>
                                        <b>Profits From Our Honey Are Fairly Shared With Our Beekeepers</b>
                                    </p>
                                    <p style={{ fontSize: "1.33em" }}>
                                        Unlike most honey sold on the market, Our honey is 'Single-Origin', we never blend our Honeys. This means our honey is different from one apiary location to another and one harvest to another. We want it that way !
                                        Each batch has a unique identifying 'Harvest Number', and once a Harvest is sold out, it's gone! So buy now!
                                    </p>
                                    <p style={{ fontSize: "1.33em" }}>
                                        All of honey is Raw, and Cold Pressed. We process it minimally so all of natures goodness makes it into the jar.
                                    </p>

                                    <p style={{ fontSize: "1.33em" }}>
                                    Find Humble Beeing at our web shop, international shipping coming soon too!
                                    </p>
                                </Grid.Column>
                                <Grid.Column floated="right" mobile={16} tablet={16} computer={10}>
                                    <Image
                                        rounded
                                        fluid
                                        src={require('../../assets/otherImages/bees-345628_1920.jpg')}
                                        style = {{
                                            paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0.1em"
                                        }}
                                    />
                                </Grid.Column>
                            <Divider hidden  />
                        </Grid>
                    </Transition>
                </Visibility>
            </Container>
        );
    };
}