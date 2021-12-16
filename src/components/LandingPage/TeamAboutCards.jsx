import React, { Component } from "react";
import { Card, Image, Container } from "semantic-ui-react";


class TeamAboutCards extends Component {

    render() {
      return (
        <Container fluid>
            <Card.Group stackable itemsPerRow={5}>
              <Card>
              <Image src={require('../../assets/teamPhotos/ObayaPFP.jpg')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Obaya</Card.Header>
                  <Card.Meta>
                  <span className='date'>Co-Founder, Beekeeper</span>
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card>
              <Image src={require('../../assets/teamPhotos/AnguyoPFP.jpg')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Anguyo</Card.Header>
                  <Card.Meta>
                  <span className='date'>Co-Founder</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              
              <Card>
              <Image src={require('../../assets/teamPhotos/AnguyoPFP.jpg')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Letaru</Card.Header>
                  <Card.Meta>
                  <span className='date'>Business Development Lead</span>
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card>
                <Image src={require('../../assets/teamPhotos/AmosPFP.jpg')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Amos</Card.Header>
                  <Card.Meta>
                  <span className='date'>Beekeeping Expert</span>
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card>
              <Image src={require('../../assets/teamPhotos/JosephinePFP.jpg')} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Josephine</Card.Header>
                  <Card.Meta>
                  <span className='date'>Administrator, Forestry Expert</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
        </Container>
      );
    }
  }
   
  export default TeamAboutCards;