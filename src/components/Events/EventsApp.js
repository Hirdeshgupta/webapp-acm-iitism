import React from 'react'
import Events from './Events';
import {DB_CONFIG} from '../../Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import { Link } from 'react-router-dom';
import {MDBAnimation } from "mdbreact"


class EventsApp extends React.Component{
    constructor(props){
        super(props);

        this.database = firebase.database().ref().child('EVENTS');

        this.state={
            EVENTS:[],
            // reverseArray: [],
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

    render(){


        return(
            <div id="events" style={{marginTop:100}}>
            <MDBAnimation reveal type="lightSpeedIn" >
               <h1 className="head_spons pl-lg-5 pl-1">EVENTS </h1>
              </MDBAnimation>

         {/* { this.state.reverseArray = this.state.EVENTS.reverse() } */}
         <MDBAnimation reveal type="fadeInLeft">
                <table className="table">
                                <tr>
                                    <th className="th_e">Title</th>
                                     <th className="th_e">Date</th>
                                </tr>
                            {

                                this.state.EVENTS.slice(0).reverse().map((eve) => {

                                    return(


                                           <tr>
                                            <td>
                                               <Link to={{
                                                   pathname: `/events/${eve.id}`,
                                                   state: {
                                                    id: eve.id,
                                                    title: eve.title,
                                                    description :eve.description,
                                                    date: eve.date,
                                                   }
                                                   }}>
                                                   <Events
                                                        title={eve.title}
                                                        imageURL={eve.imageURL}
                                                        description={eve.description}
                                                        key={eve.id}/>
                                                </Link>
                                            </td>
                                            <td>
                                                <Events date={eve.date} key={eve.id} />
                                            </td>
                                        </tr>
                                    )
                                })
                           }
                </table>
                </MDBAnimation>
            </div>
        )
}
}

export default EventsApp
