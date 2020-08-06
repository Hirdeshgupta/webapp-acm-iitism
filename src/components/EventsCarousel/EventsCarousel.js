import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {DB_CONFIG} from "../../Config/config";
import firebase from "firebase/app";
import "firebase/database";
import { MDBAnimation,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact"
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
var storageRef = firebase.storage().ref();

class EventsCarousel extends React.Component {
  constructor(props){
    super(props);
    this.date = props.date;
    this.title = props.title;
    this.description = props.description;
    this.imageURL = props.imageURL;
    this.id = props.id;

    this.database = firebase.database().ref().child('EVENTS');

    this.state={
        EVENTS: [],
        source: "",
        is_loading:true,
     }
  }

  componentDidMount(){
    document.querySelectorAll(".card").forEach(x=>{
      x.style.height="350px";
    })
      const previousEvents = this.state.EVENTS;

      // DataSnapshot
        this.database.on('child_added', snap => {
        previousEvents.push({
          id: snap.key,
          title: snap.val().title,
          date: snap.val().date,
          description: snap.val().description,
          imageURL: snap.val().imageURL,
        });
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

        // this.state.EVENTS.reverse();
        // console.log(this.state.EVENTS);

        this.state.EVENTS.map((e, index) => {
          if(e.id === this.id){
            let spaceRef = storageRef.child("IMAGES/" + this.state.EVENTS[index].imageURL)
            storageRef.child("IMAGES/" + this.state.EVENTS[index].imageURL).getDownloadURL().then((url) => {
                  // console.log(url);
                  this.setState({
                    source: url
                  })
            })
          }
        })


  }

  render() {


      if(this.state.is_loading){
        return (
          <MDBCol style={{ maxWidth: "25rem", marginLeft:"8px"}} className="event-card">
          <MDBCard >
          <Spinner animation="border" variant="primary" />
          </MDBCard>
        </MDBCol>
            );
      }
      else{
        return(
      <MDBCol style={{ maxWidth: "25rem", marginLeft:"9px"}} className="event-card">
        <MDBCard>
        <Link to={{
              pathname: `events/${this.id}`,
              state: {
                id: this.id,
                title: this.title,
                date: this.date,
                imageURL: this.imageURL,
                description: this.description
              }
            }}>
          <MDBCardImage className="card-image" src={this.state.source} waves />
          <MDBCardBody>
            <MDBCardTitle className="card-title">{this.title}</MDBCardTitle>
            <MDBCardText><i class="far fa-calendar-alt"></i> {this.date} </MDBCardText>

            <h6 className="slick-show" style={{color: "blue", paddingBottom:"20px"}}>Details</h6>
          </MDBCardBody>
          </Link>
        </MDBCard>
      </MDBCol>

        )
      }


  }
}

EventsCarousel.propTypes = {
   date: PropTypes.string,
}

export default EventsCarousel;
