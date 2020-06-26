import React from "react";
import { Link } from "react-router-dom";



class EventsDetails extends React.Component{

   
    render(){
        return(
       <div className="eventdetails">
            <br></br>
            <br></br>
            <br></br>
            <h3>{this.props.location.state.title}</h3>
           <img src={this.props.location.state.imageURL} alt={this.props.location.state.title}></img>
           <h4>{this.props.location.state.date}</h4>
           <p>{this.props.location.state.description}</p>
          <Link to={'/events'}>Back to Events List</Link>
        </div>
        )
    }
}

export default EventsDetails