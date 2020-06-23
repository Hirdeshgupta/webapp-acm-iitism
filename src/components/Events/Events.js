import React from 'react'
import PropTypes from 'prop-types';

class Events extends React.Component{
    constructor(props){
        super(props);
        this.date=props.date;
        this.title=props.title;      
        this.eventId=props.eventId;      
    }
    render(){
        return(
            <div>
                <a className="events_a" href="#">{this.title}</a>
                <h5>{this.date}</h5>
            </div>
        )
    }
}

Events.propTypes = {
    date: PropTypes.string,
}

export default Events