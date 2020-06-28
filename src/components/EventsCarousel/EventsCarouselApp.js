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
  }

  render() {
    var settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
    return(
      <MDBAnimation reveal type="fadeInUp">
      <div className="container slick text-center mt-3">
       <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
       <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
         <h2 className="slick-h2"> Events   <i class="fas fa-bullhorn"></i> </h2>

         <Slider {...settings}>
          {
           this.state.EVENTS.map((e) => {
             return(
               <EventsCarousel
                  key={e.id}
                  title={e.title}
                  imageURL={e.imageURL}
                  description={e.description}
                  date={e.date}
               />
              )
            })
           }
       </Slider>
       <Button variant="secondary" href="/events">Explore All!</Button>{' '}
      </div>

      </MDBAnimation>



    );
  }

}
export default EventsCarouselApp;
