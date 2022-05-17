import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        // naturalSlideWidth={100}
        // naturalSlideHeight={125}
        totalSlides={3}
        infinite={true}
      >
        <Slider>
          <img index={0} src="https://picsum.photos/200/300" alt="" />
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
