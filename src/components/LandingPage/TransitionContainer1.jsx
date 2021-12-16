import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Image, Responsive } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';

export default class TransitionContainer1 extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    toggleVisibility = () => {
        console.log("Consider me toggled");
        console.log(Responsive.onlyMobile.maxWidth);
    this.setState({ visible: true });
        // this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    // componentDidMount() {
    //     this.toggleVisibility();
    // }

    //make it so that when it is scrolled past it is hidden again

    render() {
        const { visible } = this.state

        return(
            <Container>
                <Visibility
                    once={false}
                    onTopVisible={this.toggleVisibility}>
                    <Transition visible={visible} animation='fade down' duration={2500}>
                        <Grid container stackable verticalAlign="middle" style={{ minHeight: '100vh' }} >
                            <Grid.Row centered textAlign="center">
                                <Header 
                                    as="h1" 
                                    textAlign="center"
                                    style={{ 
                                        fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "7.7em" , 
                                        paddingTop: window.screen.width <= Responsive.onlyMobile.maxWidth ? "1em" : "0.7em", 
                                        paddingBottom: window.screen.width <= Responsive.onlyMobile.maxWidth ? "0.5em" : "0.7em", 
                                        color: "#bf9000",

                                    }}>
                                    What We Do
                                </Header>
                            </Grid.Row>
                                <Grid.Column  mobile={16} tablet={16} computer={6} >
                                <Container  >
                                <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                                    We Improve Lives Through Beekeeping
                                    </Header>
                                    <p style={{ fontSize: "1.33em" }}>
                                        Humble Beeing is a proudly Ugandan Social Enterprise specialising in Beekeeping. We offer free training and low-cost hive materials to farmers and communities in impoverished areas of Uganda. 
                                    </p>
                                    <p style={{ fontSize: "1.33em" }}>
                                        Our mission is to help individuals and households to become self-sustaining by selling fine Ugandan honey and other bee products they produce to local and international markets.
                                    </p>
                                    </Container>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={16} computer={10} >
                                    <Image
                                        rounded
                                        fluid
                                        src={require('../../assets/otherImages/fruit-3247447_1920.jpg')}
                                        style = {{
                                            paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                        }}
                                    />
                                </Grid.Column>
                        </Grid>
                    </Transition>
                </Visibility>
            </Container>

        );
    };
}