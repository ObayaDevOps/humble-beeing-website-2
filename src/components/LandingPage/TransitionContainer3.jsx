import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Image, Divider, Button } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';


export default class TransitionContainer3 extends Component {
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
                        <Grid container  stackable verticalAlign="middle" style={{ minHeight: '80vh' }} >
                                <Grid.Column mobile={16} tablet={16} computer={6}>
                                    <Header as="h2" style={{ fontSize: "3.1em", color: "#bf9000" }}>
                                    We Innovate with Agricultural Technology
                                    </Header>
                                    <p style={{ fontSize: "1.33em" }}>
                                        We also have extensive experience with Technology and Software Development and we have huge plans to merge the worlds of Nature and Technology ... Check out our Roadmap page for more !
                                    </p>
                                    {/* <Button as='a' href='/roadmap'>Our Roadmap</Button> */}
                                </Grid.Column>
                                <Grid.Column floated="right" mobile={16} tablet={16} computer={10}>
                                    <Image
                                        rounded
                                        fluid
                                        src={require('../../assets/otherImages/bees-4845211.jpg')}
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