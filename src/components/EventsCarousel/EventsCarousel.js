import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {DB_CONFIG} from "../../Config/config";
import firebase from "firebase/app";
import "firebase/database";
import { MDBAnimation,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact"
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        source: ""
     }
  }

  componentDidMount(){
      const previousEvents = this.state.EVENTS;

      // DataSnapshot
      this.database.on('child_added', snap => {
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


        this.state.EVENTS.map((e, index) => {
          if(e.id === this.id){
            let spaceRef = storageRef.child("IMAGES/" + this.state.EVENTS[index].imageURL)
            storageRef.child("IMAGES/" + this.state.EVENTS[index].imageURL).getDownloadURL().then((url) => {
                  console.log(url);
                  this.setState({
                    source: url
                  })
            })
          }
        })


  }

  render() {

    return (
      <MDBAnimation reveal type="fadeInUp">

      <MDBCol style={{ maxWidth: "25rem" }} className="event-card">
        <MDBCard>
          <MDBCardImage className="card-image" src={this.state.source} waves />
          <MDBCardBody>
            <MDBCardTitle className="card-title">{this.title}</MDBCardTitle>
            <MDBCardText>{this.date} <i class="far fa-calendar-alt"></i></MDBCardText>
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
            <h6 classNam="slick-show">show more</h6>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



      </MDBAnimation>

    );
  }
}

EventsCarousel.propTypes = {
   date: PropTypes.string,
}

export default EventsCarousel;
