import React from "react";
import EventsCarousel from "./EventsCarousel";
import {DB_CONFIG} from "../../Config/config";
import firebase from "firebase/app";
import "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
// import {  Button } from 'react-bootstrap';
import Slider from "react-slick";
import {MDBAnimation } from "mdbreact"




class EventsCarouselApp extends React.Component {

  constructor(props){
    super(props);

     this.database = firebase.database().ref().child("EVENTS");

     this.state = {
       EVENTS: [],
       is_loading:true,
     }
  }
  componentDidMount() {
    document.querySelectorAll(".card").forEach(x=>{
      x.style.height="350px";
    })
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
        EVENTS: previousEvents,
      });
      setTimeout(()=>{
        this.setState({
          is_loading:false,
        });    
      },1000,()=>{
        document.querySelectorAll(".card").forEach(x=>{
          x.style.height="auto";
        });
      });
      

    })

    // console.log(previousEvents);
  }

  render() {
    const eventPreloaderArr =  [];
    for(let i=0;i<7;i++){
      eventPreloaderArr.push(
        <div>
        <EventsCarousel />
     </div>
      )
    }
    
    var settings = {
  className: "center",
  centerMode: false,
  lazyLoad:"progressive",
  infinite: false,
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
        initialSlide:0,
      }
    }

  ]
};
if(this.state.is_loading){
  return(
      <div className="row">
    <div className="col-8 col-sm-9 col-md-10 col-lg-11 slick text-center mt-3">
     <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
     <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
       <h2 className="h1-responsive" style={{fontWeight:700,color:"rgb(26, 18, 69)"}}> EVENTS   </h2><hr style={{height:5}}></hr>


       <Slider  {...settings} >
        {  
        eventPreloaderArr
         }
     </Slider>
     <div className="row justify-content-center">
       <div className="col-12">
       {/* <Button variant="secondary" style={{marginTop: "-120px"}}  href="#events">Explore All</Button>{' '} */}
       {/* <Button color="primary" size="lg" block>Block level button</Button> */}
       <Button color="primary" className="explore" size="lg"  href="/events"><i class="fas fa-list"></i> &nbsp;&nbsp;Explore All</Button>
       
       </div>
     </div>
    </div>

    </div>





  );
}
else{
  return(
      <div className="row">
    <div className="col-8 col-sm-9 col-md-10 col-lg-11 slick text-center mt-3">
     <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
     <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
       <h2 className="h1-responsive" style={{fontWeight:700,color:"rgb(26, 18, 69)"}}> EVENTS   </h2><hr style={{height:5}}></hr>


       <Slider  {...settings} >
        {  
         this.state.EVENTS.slice(0).reverse().slice(0, 7).map((e) => {
          //  console.log(e.title);
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
       <div className="col-12">
       {/* <Button variant="secondary"  href="/events">Explore All</Button>{' '} */}
       <Button color="primary" className="explore" size="lg"  href="/events"><i class="fas fa-list"></i> &nbsp;&nbsp;Explore All</Button>

       </div>
     </div>
    </div>

    </div>
  );
}



  }

}
export default EventsCarouselApp;
