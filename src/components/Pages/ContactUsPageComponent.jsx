import React, { Component } from "react";
import FooterContainer from '../FooterContainer';
import { Container, Transition, Header, Visibility, Grid, Image, Responsive, Divider, Button, Icon, List } from "semantic-ui-react";
import MapEmbedContainer from "../LandingPage/MapContainer";

// Here we will outline, the 'Honey Drop' buisness model.
//               We produce small batches of honey, and then we only select the finest white-capped comb to bottle.
//               Due to this, when we sell out, we sell out. All of our honey will be single origin, allowing you to experince the taste nature in that particular region

//               Sign up to our email or our whats app lists to get notified of when we harvest and sell !

const PageContent = () => (
  <div style={{minHeight: "100vh"}}>
          <div>
        <Container>
            <Transition visible={true} animation='fade down' duration={2500}>
                <Grid container stackable verticalAlign="middle" style={{ minHeight: '100vh' }} >
                    <Grid.Row centered textAlign="center" style={{ paddingBottom: "1em", paddingTop: "7em" }} >
                        <Header 
                            as="h1" 
                            textAlign="center"
                            style={{ 
                                fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "7.7em" , 
                                paddingTop: window.screen.width <= Responsive.onlyMobile.maxWidth ? "1em" : "0.7em", 
                                paddingBottom: window.screen.width <= Responsive.onlyMobile.maxWidth ? "0.5em" : "0.7em", 
                                color: "#bf9000",

                            }}>
                            Get in Touch! <span role="img" aria-label="waving_hand">👋</span>


                        </Header>
                    </Grid.Row>
                    
                    <Grid.Row centered textAlign="center" >
                      {/* <Grid.Column centered  mobile={16} tablet={16} computer={6} > */}
                            <List horizontal >

                            <List.Item>
                                <List.Content>
                                <Icon name ='th' size='massive'  />
                                  <List.Header as='a' href='https://linktr.ee/humblebeeing' target='_blank' style={{ fontSize: "1.75em", color: "#bf9000" }}>
                                    LinkTree</List.Header>
                                </List.Content>
                              </List.Item>

                              <List.Item>
                                <List.Content>
                                <Icon name ='instagram' size='massive' />
                                  <List.Header as='a' href='https://www.instagram.com/humble_beeing_ug/?hl=en' target='_blank' style={{ fontSize: "1.75em", color: "#bf9000" }} >
                                    Instagram</List.Header>
                                </List.Content>
                              </List.Item>

                              <List.Item>
                                <List.Content>
                                <Icon name ='twitter square' size='massive' />
                                  <List.Header as='a' href='https://twitter.com/humble_beeing' target='_blank'  style={{ fontSize: "1.75em", color: "#bf9000" }}>
                                    Twitter</List.Header>
                                </List.Content>
                              </List.Item>

                              <List.Item>
                                <List.Content>
                                <Icon name ='linkedin' size='massive'  />
                                  <List.Header as='a' href='https://www.linkedin.com/company/humble-beeing/' target='_blank' style={{ fontSize: "1.75em", color: "#bf9000" }}>
                                    LinkedIn</List.Header>
                                </List.Content>
                              </List.Item>


                            </List>

                    </Grid.Row>

                          {/* <Button icon as="a" size="large" href='https://www.instagram.com/humble_beeing_ug/?hl=en' target='_blank'>
                            <Icon name ='instagram' size='large' />
                          </Button> */}
                        

                      {/* </Grid.Column>                     */}
                      {/* <Grid.Column  mobile={16} tablet={16} computer={6} >

                      <Button icon as="a" size="large" href='https://www.instagram.com/humble_beeing_ug/?hl=en' target='_blank'>
                            <Icon name ='twitter square' size='large' />
                          </Button>
                     
                      </Grid.Column>
                        <Grid.Column  mobile={16} tablet={16} computer={6} >
                          <Icon name ='linkedin' size='large' />                 
                      </Grid.Column> */}
                        {/* <Grid.Column   centered textAlign="center" mobile={16} tablet={16} computer={6} >
                        <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                            LinkTree
                          </Header>
                          <Icon name ='list' size='massive' />


                            
                        </Grid.Column> */}
                      {/* </Grid.Row> */}
                      < Divider hidden />


                    <Grid.Column   centered textAlign="center" mobile={16} tablet={16} computer={6} >
                        <Header as="h2"  style={{ fontSize: "2.1em", color: "#bf9000" }}>
                            Phone (Airtel)
                          </Header>
                          <Header as="h3"  style={{ fontSize: "2.1em", color: "#bf9000" }}>
                            +256 750 446 541
                          </Header>
                    </Grid.Column>
                    <Grid.Column  centered textAlign="center" mobile={16} tablet={16} computer={10} >
                        <Header as="h2"  style={{ fontSize: "2.1em", color: "#bf9000" }}>
                            Phone (MTN)
                            </Header>
                            <Header as="h3"  style={{ fontSize: "2.1em", color: "#bf9000" }}>
                            +256  789 062 116
                          </Header>
                    </Grid.Column>
                      

                      < Divider />
                      <Header as="h3"  style={{ fontSize: "2.7em", color: "#bf9000" }}>
                            Find us in Kabalagala <span role="img" aria-label="world">🌍</span>
                          </Header>
                      <p style={{ fontSize: "1.33em", color: "#bf9000" }}>
                          <MapEmbedContainer></MapEmbedContainer>
                      </p>
                         <Header as="h3"  style={{ fontSize: "1.7em", color: "#bf9000" }}>
                            2nd Floor, Tools and Machinery Building (Opposite the Police)
                          </Header>
                      < Divider />                 
                </Grid>
            </Transition>
    </Container>
    </div>    
     </div>

);

class ContactUsPageComponent extends Component {
    render() {
      return (
        <div>
        <PageContent />
        <Divider hidden />
        <FooterContainer />
        </div>
      );
    }
  }
   
  export default ContactUsPageComponent;