import React from "react";
import { MDBCarousel,MDBAnimation, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const HomeCarousel = () => {
  return (
    <div className="container-fluid px-0" style={{background:"rgb(106, 106, 106)"}} >
      {/* <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner > */}
        {/* <MDBCarouselItem itemId="1"> */}
          <AutoplaySlider
            animation="foldOutAnimation"
            play={true} // should stop playing on user interaction
            interval={6000}
           >
          <MDBView>
            <img
              className="d-block w-100 img-fluid "
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
              style={{height:"125vh"}}

            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          {/* <MDBCarouselCaption>
          <MDBAnimation reveal type="zoomIn">
            <h3 className="h3-responsive">Events</h3>
            <p>Event Description</p>
            </MDBAnimation>
          </MDBCarouselCaption> */}
        {/* </MDBCarouselItem> */}
        {/* <MDBCarouselItem itemId="2"> */}
          <MDBView>
            <img
              className="d-block w-100 img-fluid "
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
              style={{height:"125vh"}}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Other Event</h3>
            <p>Other Event Description</p>
          </MDBCarouselCaption> */}
        {/* </MDBCarouselItem> */}
        {/* <MDBCarouselItem itemId="3"> */}
          <MDBView>
            <img
              className="d-block w-100 img-fluid "
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
              style={{height:"125vh"}}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Another Event</h3>
            <p>Another Event Description</p>
          </MDBCarouselCaption> */}
                  </AutoplaySlider>
        {/* </MDBCarouselItem>
      </MDBCarouselInner> */}
    {/* </MDBCarousel> */}
    </div>
  );
}

export default HomeCarousel;
