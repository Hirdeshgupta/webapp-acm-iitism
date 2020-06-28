import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {MDBAnimation } from "mdbreact"
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class EventsCarousel extends React.Component {
  constructor(props){
    super(props);
    this.date = props.date;
    this.title = props.title;
    this.description = props.description;
    this.imageURL = props.imageURL;
    this.id = props.id;
  }

  render() {

    return (
      <MDBAnimation reveal type="fadeInUp">
      <div className="slick-div">
        <h6 className="slick-h6">{this.title}</h6>
        <h6 className="slick-date">{this.date} <i class="far fa-calendar-alt"></i></h6>
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
      </div>
      </MDBAnimation>

    );
  }
}

EventsCarousel.propTypes = {
   date: PropTypes.string,
}

export default EventsCarousel;
