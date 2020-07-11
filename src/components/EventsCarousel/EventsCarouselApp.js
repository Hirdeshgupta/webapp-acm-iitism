import React from "react";
import EventsCarousel from "./EventsCarousel";
import {DB_CONFIG} from "../../Config/config";
import firebase from "firebase/app";
import "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import Slider from "react-slick";
import {MDBAnimation } from "mdbreact"



class EventsCarouselApp extends React.Component {

  constructor(props){
    super(props);

     this.database = firebase.database().ref().child("EVENTS");

     this.state = {
       EVENTS: [],
     }
  }
  componentDidMount() {
    
    const previousEvents = this.state.EVENTS;

    this.database.on("child_added", snap => {
      previousEvents.push({
        id: snap.key,
        title: snap.val().title,
        date: snap.val().date,
        description: snap.val().description,
        imageURL: snap.val().imageURL,
      })

      this.setState({
        EVENTS: previousEvents
      })

    })

    // console.log(previousEvents);
  }

  render() {
    var settings = {
  className: "center",
  centerMode: true,
  lazyLoad:"progressive",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  // prevArrow:"<a><i class='fas fa-chevron-left'></i></a>",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide:1,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide:1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide:1,
      }
    }

  ]
};


    return(
      <MDBAnimation reveal type="fadeInUp">
        <div className="row">
      <div className="col-8 col-sm-9 col-md-10 col-lg-11 slick text-center mt-3">
       <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
       <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
         <MDBAnimation reveal type="fadeInUp" >
         <h2 className="h1-responsive" style={{fontWeight:700,color:"rgb(26, 18, 69)"}}> EVENTS   </h2><hr style={{height:5}}></hr>
         </MDBAnimation>


         <Slider  {...settings} >
          {
           this.state.EVENTS.slice(0).reverse().slice(0, 6).map((e) => {
             console.log(e.title);
             return(
               <div>
              <EventsCarousel
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  imageURL={e.imageURL}
                  description={e.description}
                  date={e.date}
               />
               </div>

              )
            })
           }
       </Slider>
       <div className="row justify-content-center">
         <div className="col-2">
         <Button variant="secondary" href="/events">Explore All!</Button>{' '}
         </div>
       </div>
      </div>

      </div>

      </MDBAnimation>



    );

  }

}
export default EventsCarouselApp;
