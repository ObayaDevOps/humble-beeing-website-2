import React, { Component } from "react";
import { Container, Transition, Image, Visibility, Grid, Header, Divider, Segment, Responsive } from "semantic-ui-react";
import  {HomepageHeading }from '../HomeForest';
import About from '../LandingPage/TeamAboutCards';

export default class TransitionContainer8 extends Component {
    state = { visible: false }

    toggleVisibility = () => {
        console.log("Consider me toggled");
    this.setState({ visible: true });
    }


    render() {
        const { visible } = this.state

        return(
            <Container fluid >
            <Visibility
            once={false}
            onTopVisible={this.toggleVisibility}>
            <Transition visible={visible} animation='fade up' duration={4500}>
            <Segment 
                fluid 
                style={{ 
                    backgroundImage: `url(${require('../../assets/slider/heidi-erickson-2Q9zeNBoxA8-unsplash.jpg')})`, 
                    backgroundSize: 'cover', 
                    minHeight: '100vh' }}>
                        <Grid  columns="equal" stackable  verticalAlign="middle"  >
                            <Grid.Row centered textAlign="center">
                                <Header 
                                    centered  
                                    as="h3" 
                                    style={{ 
                                        color: "white" ,  
                                        fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4em" : "7.7em" , 
                                        paddingTop:"0.3em", 
                                        paddingBottom:"0em" }}
                                >
                                    <b>Our Jouney So Far</b>
                                </Header>
                            </Grid.Row>
                            <Grid.Column textAlign="center" width={6} style={{ padding: "5em" }}>
                                    <Image
                                        rounded
                                        size='medium'
                                        centered
                                        hidden={ window.screen.width <= Responsive.onlyMobile.maxWidth }
                                        src={require('../../assets/icons/bee.png')}
                                    /> 
                                    <Image
                                        rounded
                                        size='small'
                                        centered
                                        hidden={ window.screen.width > Responsive.onlyMobile.maxWidth }
                                        src={require('../../assets/icons/bee.png')}
                                    /> 
                                        <p style={{ 
                                            fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "4.5em" , 
                                            textAlign:'center', 
                                            color: "white" }}>
                                            <b>{207 * 50000} Bees</b>
                                        </p>                                         
                                    </Grid.Column>
                                <Grid.Column textAlign="center" width={5} style={{ padding: "5em" }}>
                                    <Image
                                            rounded
                                            size='medium'
                                            centered
                                            hidden={ window.screen.width <= Responsive.onlyMobile.maxWidth }
                                            src={require('../../assets/icons/hive.png')}
                                            // src={require('../assets/bees-345628_1920.jpg')}
                                        />  
                                        <Image
                                            rounded
                                            size='small'
                                            centered
                                            hidden={ window.screen.width > Responsive.onlyMobile.maxWidth }
                                            src={require('../../assets/icons/hive.png')}
                                            // src={require('../assets/bees-345628_1920.jpg')}
                                        />                                       
                                            <p style={{ 
                                                fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "4.5em" ,  
                                                color: "white" }}>
                                            <b>207 Bee Hives</b>
                                        </p>
                                           
                                    </Grid.Column>
                                    <Grid.Column textAlign="center" width={5} style={{ padding: "5em" }}>
                                    <Image
                                        rounded
                                        size='medium'
                                        centered
                                        hidden={ window.screen.width <= Responsive.onlyMobile.maxWidth }

                                        src={require('../../assets/icons/network.png')}
                                        // src={require('../assets/bees-345628_1920.jpg')}
                                    />
                                     <Image
                                            rounded
                                            size='small'
                                            centered
                                            hidden={ window.screen.width > Responsive.onlyMobile.maxWidth }
                                            src={require('../../assets/icons/network.png')}
                                            // src={require('../assets/bees-345628_1920.jpg')}
                                    />  
                                        <p style={{ 
                                            fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "4.5em" , 
                                            color: "white" }}>
                                            <b>3 Apiary Locations</b>
                                        </p>
                                        
                                    </Grid.Column>  
                        </Grid>
            </Segment>
            </Transition>
            </Visibility>

            </Container>


        );
    };
}