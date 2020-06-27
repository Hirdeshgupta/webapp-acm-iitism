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
                <p className="events_a">{this.title}</p>
                <h5>{this.date}</h5>
            </div>
        )
    }
}

Events.propTypes = {
    date: PropTypes.string,
}

export default Events