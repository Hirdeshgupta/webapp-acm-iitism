import React from 'react'
import PropTypes from 'prop-types';
import EventsDetails from './EventsDetails'

class Events extends React.Component{
    constructor(props){
        super(props);
        this.date=props.date;
        this.title=props.title;
        // this.imageURL=props.imageURL;
        // this.description=props.description;
        this.eventId=props.eventId;
    }
    render(){

        return(
          <div>
            <div className="events_a">
                <p style={{margin:0}}>{this.title}</p>

            </div>
            <div className="events_date">
                <h5  style={{color:"#1a1245"}}>{this.date}</h5>
            </div>
            </div>
        )
    }
}

Events.propTypes = {
    date: PropTypes.string,
}

export default Events
