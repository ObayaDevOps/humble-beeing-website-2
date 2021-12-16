import React, { Component } from "react";
import Slider from "react-slick";

import { Image, Container } from "semantic-ui-react";

// Modify to take a param that is a path
export default class Imagelider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      fade:true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container fluid>
        <Slider {...settings}>
          <div>
          <Image src={require('../assets/francesco-ungaro-8LOp69ILKF8-unsplash.jpg')} />
          </div>
          <div>
          <Image src={require('../assets/slider/heidi-erickson-2Q9zeNBoxA8-unsplash.jpg')} />
          </div>
          <div>
          <Image src={require('../assets/slider/honey-bee-5352170_1920.jpg')} />
          </div>
        </Slider>
      </Container>
    );
  }
}