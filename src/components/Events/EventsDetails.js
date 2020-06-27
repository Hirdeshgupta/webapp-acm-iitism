import React from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import { Link } from "react-router-dom";
var storageRef = firebase.storage().ref();


class EventsDetails extends React.Component{
    constructor(props){
        super(props);

        this.database = firebase.database().ref().child('EVENTS');
        
        this.state={
            EVENTS:[],
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
 
    }
        // showImage = ()=>
 
   
    render(){
        return(
       <div className="eventdetails">
            <br></br>
            <br></br>
            <br></br>
            <h3>{this.props.location.state.title}</h3>
            <img  id="new-img"></img>
            {
                this.state.EVENTS.map((eve,index) => {
                    if(eve.id===this.props.location.state.id){
                  let spaceRef = storageRef.child('IMAGES/'+this.state.EVENTS[index].imageURL)
                  storageRef.child('IMAGES/'+this.state.EVENTS[index].imageURL).getDownloadURL().then((url)=>{
                      // console.log(url);
                      document.getElementById('new-img').src = url;
                })
                }
              }
               
          )
            }
           <h4>{this.props.location.state.date}</h4>
           <p>{this.props.location.state.description}</p>
          <Link to={'/events'}>Back to Events List</Link>
        </div>
        )
    }
}

export default EventsDetails