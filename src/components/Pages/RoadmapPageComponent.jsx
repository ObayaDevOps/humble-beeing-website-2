import React, { Component } from "react";
import { Container, Transition, Header, Visibility, Grid, Image, Responsive, Divider } from "semantic-ui-react";
import FooterContainer from '../FooterContainer';



export default class RoadmapPageComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = { visible: true };
}

  toggleVisibility = () => {
    console.log("Consider me toggled");
    console.log(Responsive.onlyMobile.maxWidth);
  this.setState({ visible: true });
    // this.setState((prevState) => ({ visible: !prevState.visible }))
  }

  render() {
    const { visible } = this.state

      return (
        <div>
        <Container>
        <Visibility
            once={false}
            onTopVisible={this.toggleVisibility}>
            <Transition visible={visible} animation='fade down' duration={2500}>
                <Grid container stackable verticalAlign="middle" style={{ minHeight: '100vh' }} >
                    <Grid.Row centered textAlign="center" style={{ paddingBottom: "1em", paddingTop: "7em" }} >
                        <Header 
                            as="h1" 
                            textAlign="center"
                            style={{ 
                                fontSize: window.screen.width <= Responsive.onlyMobile.maxWidth ? "4.5em" : "7.7em" , 
                                paddingTop: window.screen.width <= Responsive.onlyMobile.maxWidth ? "2em" : "0.7em", 
                                paddingBottom: window.screen.width <= Responsive.onlyMobile.maxWidth ? "0.5em" : "0.7em", 
                                color: "#bf9000",

                            }}>
                            The 5-Phase Plan
                        </Header>
                    </Grid.Row>

                    <Grid.Column  mobile={16} tablet={16} computer={6} >
                        <Container >
                        <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                            Phase 1: Develop and Perfect Apiary Management
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                This lays the groundwork for all future business endeavours and includes Year-round Forage Planting: To ensure the bees have enough nectar to make honey and wax,
                                As well as Hive Splitting and Queen Rearing (Advanced Beekeeping Techniques) to boost our 'Colonisation Rate'  
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                Our mission is to help individuals and households to become self-sustaining by selling fine Ugandan honey and other bee products they produce to local and international markets.
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                If we want to eventually roll out our model to the average Ugandan farmer, we need to be able to produce top-quality honey, with a low a starting cost as possible. 
                                With this in mind we chose the Kenyan Top Bar Hive (KTB). We make these in-house from locally sourced wood and their simple design does not require advanced carpentry skills.
                                Read More on our Blog ! - Link to 'Why we chose the KTB Hive'
                            </p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={10} >
                            <Image
                                rounded
                                fluid
                                src={require('../../assets/phasePlanPhotos/ObayaHoney.png')}
                                style = {{
                                    paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                }}
                            />
                      </Grid.Column> 

                      <Grid.Column  mobile={16} tablet={16} computer={6} >
                        <Container >
                        <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                            Phase 2: Establish Market Presence
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                Now we have set up and can maintain a regular honey flow, we work on Branding our Honey, Getting it to market and Spreading the word !
                                We will experiment with value addition of hive products at this stage, everything ranging from pro-biotic garlic fermented honey, to scented and moulded candles, to wax lip balms.
                                In the future we will share these skills gained and knowledge acquired to others for free !
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                Link to blog article - 'Abundance - The many products (and benefits) of the Honeybee hive'
                                 Wax candles, and negative ions, Medicinal Hive Products (Propolis) ,Raw Honey and Health, Fermented Honey benefits, skin honey benefits (Lip balms, body butters), Bee Venom
                            </p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={10} >
                            <Image
                                rounded
                                fluid
                                src={require('../../assets/phasePlanPhotos/HBBagsPhoto.png')}
                                style = {{
                                    paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                }}
                            />
                      </Grid.Column>     


                      <Grid.Column  mobile={16} tablet={16} computer={6} >
                        <Container >
                        <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                            Phase 3: Innovate with IoT Beehives and Agri-Tech
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                This is where we start to strut our stuff! We plan to develop Agricultural Technology, starting with a QR Code Hive Record Keeping, so with a scan of a tablet you can view the history of the hive to help make judgements on the current state of the bees. Tie that data to a blockchain and you now have cryptographically verifiable assurances on the source of your honey !
                                We also have plans for an Internet of Things (IoT) Connected Hive/Catcher Box. We will insert temperature and humidity sensors, as well as a small microphone to remotely assess the state of the beehive.
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                Err...Ok, So What's the Point of That ?
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                Experimentation and Learning at first, but we believe the addition of IoT can add actual value to beekeeping. For example, when acquiring a new colony of bees, a beekeeper must set several 'Catcher Boxes' in trees, they must then wait for a homeless bee swarm to colonise the Catcher Box, before transfering the bees to a full size hive.
                                But when attempting to launch apiaries at scale, this means hundreds of Catcher Boxes, distributed over several acres of land all of which need to be checked regularly.
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                So how about automating that with IoT connected catcher boxes that contain microphones and that can alert a beekeeper that a catcherbox is inhabited by bees, no wasteful travel or time.
                                Furthermore, we can start to build up datasets on the most sucessful areas and conditions to catch a swarm of bees, and catch even more, even quicker ( We hope ! )
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                With an IoT Beehive we can start to collect data on what factors most affect the quality and quantity of honey and other hive products. We can add regional weather data and start to ask more interesting questions, for example :
                                What's the relationship between rainfall and honey yield at different times of year ? 
                            </p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={10} >
                            <Image
                                rounded
                                fluid
                                src={require('../../assets/phasePlanPhotos/IotHiveComponents.jpg')}
                                style = {{
                                    paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                }}
                            />
                      </Grid.Column> 

                      <Grid.Column  mobile={16} tablet={16} computer={6} >
                        <Container >
                        <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                            Phase 4: Community Outreach  
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                              Now we stop tinkering and get back to the main mission at hand! Improving lives through Beekeeping !
                              We will use our now proven model, methods and practices and share it all as far and wide as possible, with anyone who has some farmland and a willingness to make 50,000+ new bee friends.
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                We will have an established market presence (Phase 2) and so can entice new farmers to the practice of beekeeping by buying their honeycombs and hive products from them for good prices, allowing the farmer to make a good income from their hives.
                            </p>
                            </Container>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={16} computer={10} >
                            <Image
                                rounded
                                fluid
                                src={require('../../assets/phasePlanPhotos/RogerPlusTeamFieldPhoto.jpg')}
                                style = {{
                                    paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                }}
                            />
                      </Grid.Column>


                      <Grid.Column  mobile={16} tablet={16} computer={6} >
                        <Container >
                        <Header as="h2"  style={{ fontSize: "3.1em", color: "#bf9000" }}>
                            Phase 5: Export Ugandan Value-Added Product to International Markets  
                            </Header>
                            <p style={{ fontSize: "1.33em" }}>
                                The final frontier. Gone are the days when African Nations appealed for AID funding, we want TRADE ( shoutout to Andrew Rugasira : Good African Coffee ).
                                We will sell a premium, fully packaged and value-added, Ugandan product with multiple USPs (Blockchain Supply Chain Tracking, Community Honey and more) to the international market. 
                                Uganda is particularly advantaged in this area over most other African Nations, we are one of only 5 African Nations allowed to export honey into the EU !
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                              We hope to help provide good income to local farmers while at the same time showcasing what African talent is able accomplish. Why can't Uganda start leading the world in agricultural technology ? 
                            </p>
                            <p style={{ fontSize: "1.33em" }}>
                                We Can. We Will :)
                            </p>
                            </Container>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={16} computer={10} >
                            <Image
                                rounded
                                fluid
                                src={require('../../assets/phasePlanPhotos/HBJarPhoto.jpg')}
                                style = {{
                                    paddingBottom : window.screen.width <= Responsive.onlyMobile.maxWidth ? "3em" : "0em"
                                }}
                            />
                      </Grid.Column>                      
                </Grid>
            </Transition>
        </Visibility>
    </Container>
    <Divider hidden />
    <FooterContainer />
    </div>

      );
    }
  }
   