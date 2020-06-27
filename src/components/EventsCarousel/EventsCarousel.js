import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

import { Card, Button } from 'react-bootstrap';


class EventsCarousel extends React.Component {
  constructor(props){
    super(props);
    this.date = props.date;
    this.title = props.title;
    this.description = props.description;
    this.imageURL = props.imageURL;
  }

  render() {

    return (
      <div>
      <div className="slick-div">
        <h6 className="slick-h6">{this.title}</h6>
        <span><h6 className="slick-date">{this.date} <i class="far fa-calendar-alt"></i></h6></span>
      </div>
      </div>
    );
  }
}

EventsCarousel.propTypes = {
   date: PropTypes.string,
}

export default EventsCarousel;
