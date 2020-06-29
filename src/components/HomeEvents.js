import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class HomeEvents extends React.Component {
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
    <div>
    <h1>{this.title}</h1>
    <h3>{this.date}</h3>
    <h6>{this.description}</h6>
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

  );
}
}

HomeEvents.propTypes = {
   date: PropTypes.string,
}

export default HomeEvents;
