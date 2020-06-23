import React from 'react'
import Events from './Events';
import {DB_CONFIG} from '../../Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class EventsApp extends React.Component{
    constructor(props){
        super(props);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('EVENTS');

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
          })

          this.setState({
            EVENTS: previousEvents
          })
        })
    }

    render(){
      
        return(
            <div id="events">
                <h1 className="event_head">EVENTS</h1>
                <table className="table">
                                <tr>
                                    <th className="th_e">Title</th>
                                     <th className="th_e">Date</th>
                                </tr>
                            {
                                this.state.EVENTS.map((eve) => {
                                    return(
                                           <tr>
                                            <td>
                                                <Events title={eve.title} key={eve.id}/>
                                            </td>
                                            <td>
                                                <Events date={eve.date} key={eve.id} />
                                            </td>
                                        </tr>
                                    )
                                })
                           }
                </table>
            </div>
        )
}
}

export default EventsApp
