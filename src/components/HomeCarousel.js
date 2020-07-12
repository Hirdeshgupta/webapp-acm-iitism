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
     <div className="container-fluid px-0 homeCarosel" style={{background:"rgb(106, 106, 106)",overflow:"hidden"}} >
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
            className="autoplay-slider"
            animation="foldOutAnimation"
            play={true} // should stop playing on user interaction
            interval={6000}
           >
         <MDBView>
            <img
              className="d-block w-100 img-fluid heritage-image"
              src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/69845538_2539278436167186_231316922698825728_o.jpg?_nc_cat=105&_nc_sid=cdbe9c&_nc_oc=AQmw0Y5ML5KF3Q6NuyDY7vSaHHkH-s3ZfMErM5WOgP_zaATqWl_9kqagi8h5MBgGqr4oeLitwR-OkUzBACgOo89C&_nc_ht=scontent.fpat2-1.fna&oh=b7e5480b5faa3d1f353c999a8bf432bf&oe=5F2B7003"
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
              className="d-block w-100 img-fluid heritage-image"
              src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/67481161_2464510183644012_2108314121786097664_o.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_oc=AQl84pwGtbd3NHM0q3H8rChMxTcR-w5DJvuxmbqsMQ8ujKGXiwNekYWs29Cn9YGdwVPZuTrltx6_VBSKUFKgIoNi&_nc_ht=scontent.fpat2-1.fna&oh=8bc740aee3f19ff59c8be69837d1dfd2&oe=5F2B3B2B"
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
              className="d-block w-100 img-fluid heritage-image"
              src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/74371756_1935244246620722_3579241692252864512_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_oc=AQmpwVuwvl4Yqyd4fmKbNVucgMjfq79RRQslNOp6YFcXiskxfeUvRZkwI7csV8O37UMdRqlyelBzFBs6n9ECYyzu&_nc_ht=scontent.fpat2-1.fna&oh=569ceafef82193c55c57786526861ddf&oe=5F23DE88"
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
