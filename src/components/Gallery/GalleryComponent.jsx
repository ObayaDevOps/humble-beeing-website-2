import React from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { Segment, Divider, Container, Header } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroupComponent" 
import 'pure-react-carousel/dist/react-carousel.es.css';



const imageArray = [
  <Image tiny src={require('../../assets/galleryImages/fruit-3247447_1920.jpg')} />,
  // <Image mini src={require('../galleryImages/fruit-3247447_1920.jpg')} />,
  // <Image mini src={require('../galleryImages/fruit-3247447_1920.jpg')} />
];

var numberOfSlides = imageArray.length;


const CarouselComponent = () => (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={numberOfSlides}
      >

        <Slider>
          { imageArray.map(slide => (
              <Slide tag="a" > {slide}</Slide>
          ))}
        </Slider>
        <Divider />
        <CustomDotGroup slides={numberOfSlides} />
      </CarouselProvider>
);
   
const GalleryComponent = () => (
  <Container>
      <Segment attached="top">
        <Header as="h2" content="Image carousel" style={{ paddingTop: "3.5em"}} />
        <p>
          This prototype features how to create a carousel with images, take a
          look into <code>examples/ImageCarousel</code> to get more details.
        </p>
      </Segment>

    <Segment attached="bottom">
    <CarouselComponent />
    </Segment>

  </Container>
  
);
  export default GalleryComponent;