import React from "react";
import HomeEvents from "./HomeEvents";
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
              src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/74371756_1935244246620722_3579241692252864512_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_oc=AQmpwVuwvl4Yqyd4fmKbNVucgMjfq79RRQslNOp6YFcXiskxfeUvRZkwI7csV8O37UMdRqlyelBzFBs6n9ECYyzu&_nc_ht=scontent.fpat2-1.fna&oh=569ceafef82193c55c57786526861ddf&oe=5F23DE88"
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
              src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/72952460_1935244139954066_6725720620039929856_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_oc=AQlCbMYdNxkUBwd1wPBafVcUIbBumIIa7521Ycr3n_ErkB4lN77GXKFoSEIaupBmV_L0l0_YX7szureDXz9cvdtc&_nc_ht=scontent.fpat2-1.fna&oh=5ce7bea2eab3d9586357be2c2476f52a&oe=5F247B6C"
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
              src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/74673202_1935245046620642_8926980097559232512_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_oc=AQmEFZLL9pw8jTMpdB0fZw0F3OzUoB2Do-A5dRcqfqhms3fM6FHXODvu1NIzjGiZ6OTuSscCwKgh7yz0gGHgOZea&_nc_ht=scontent.fpat2-1.fna&oh=2d699778bb937dcfe39145b383d14777&oe=5F2533BD"
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
