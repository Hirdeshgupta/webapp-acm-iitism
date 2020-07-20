import React from 'react'
import Events from './Events';
import RecentEventsApp from "./RecentEventsApp";
import EventsCarouselApp from "../EventsCarousel/EventsCarouselApp";
import {DB_CONFIG} from '../../Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import { Link } from 'react-router-dom';
import {MDBAnimation,  MDBRow, MDBCol, } from "mdbreact"
import Skeleton from 'react-loading-skeleton';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

class EventsApp extends React.Component{
    constructor(props){
        super(props);

        this.database = firebase.database().ref().child('EVENTS');

        this.state={
            EVENTS:[],
            is_loading:true,
            done: undefined
            // reverseArray: [],
         }

    }
    componentDidMount(){
      document.querySelector(" .fa-bars").style.color="black";

      let num=0;
      if(window.innerWidth<992){
        document.querySelector(".hamburger").addEventListener("click",()=>{
          num++;
          if(num%2==0){
            if(document.scrollingElement.scrollTop<20){
              document.querySelector(" .fa-bars").style.color="black";
            }
          }
          else{
            document.querySelector(" .fa-bars").style.color="white";
          }
        })
      }
      if(window.innerWidth>992){
        document.querySelectorAll(".anime-links").forEach(x=>{
          x.style.color="black";
          this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
        })
      }
      document.querySelector(" .fa-bars").style.color="black";

      document.addEventListener("scroll",()=>{
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 20) {
          document.querySelectorAll(".anime-links").forEach(x=>{
            x.style.color="white";
            this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
          })
       document.querySelector(" .fa-bars").style.color="white";

          if ( document.querySelector(".anime-links").style.color=="rgba(255,255,255,0)") {
            document.querySelectorAll(".anime-links").forEach(x=>{
              x.style.color="white";
              this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
            })
       document.querySelector(" .fa-bars").style.color="white";

          }
        } else {
          if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
            if(window.innerWidth>992){
            document.querySelectorAll(".anime-links").forEach(x=>{
              x.style.color="black";
              this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
            })
          }
       document.querySelector(" .fa-bars").style.color="black";

          if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
            if(window.innerWidth>992){
            document.querySelectorAll(".anime-links").forEach(x=>{
              x.style.color="black";
              this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
            })
          }
       document.querySelector(" .fa-bars").style.color="black";

          }
        }
      }})
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
            EVENTS: previousEvents,
            is_loading:false,
          })

          setTimeout(() => {
           fetch("https://jsonplaceholder.typicode.com/posts")
             .then(response => response.json())
             .then(json => this.setState({ done: true }));
         }, 2000);

          // console.log("hello there ")
        })

    }
    animeLinkChangeColor(color){
        var addRule = (function (style) {
          var sheet = document.head.appendChild(style).sheet;
          return function (selector, css) {
              var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
                  return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
              }).join(";");
              sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
          };
      })(document.createElement("style"));

      addRule(".anime-links::after", {
          background:color ,
      });
      }
    render(){
        const preloaderArr=[];
        for(let i=0;i<10;i++){
            preloaderArr.push(
                <tr>
                <td>
                    <Skeleton />
                </td>
                <td>
                    <Skeleton />
                </td>
            </tr>
            )
        }
        return(
          <div>
          <div className="recent-events">
            <MDBAnimation reveal type="lightSpeedIn" >
             <h6 className="head_spons pl-lg-5 pl-1">RECENT EVENTS</h6>
            </MDBAnimation>

            <RecentEventsApp />


          </div>
            <div id="events" style={{marginTop:-130}}>
            <MDBAnimation reveal type="lightSpeedIn" >
               <h3 className="head_spons pl-lg-5 pl-1">ALL EVENTS </h3>
              </MDBAnimation>

         {/* { this.state.reverseArray = this.state.EVENTS.reverse() } */}
         <MDBAnimation reveal type="fadeInLeft">
                <table className="table">
                                <tr>
                                    <th className="th_e">Title</th>
                                     <th className="th_e">Date</th>
                                </tr>
                            {
                                this.state.is_loading ?
                                preloaderArr
                                :
                                (
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
                                )
                           }
                </table>
                </MDBAnimation>
            </div>
            </div>
        )
}
}

export default EventsApp
