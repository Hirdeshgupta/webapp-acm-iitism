import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { Link } from "react-router-dom";
import { MDBBtn,MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
var storageRef = firebase.storage().ref();

class EventsDetails extends React.Component{
  
  constructor(props){
      super(props);

      this.database = firebase.database().ref().child('EVENTS');

      this.state={
          EVENTS:[],
          done: undefined
       }

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
        })
      })

      setTimeout(() => {
       fetch("https://jsonplaceholder.typicode.com/posts")
         .then(response => response.json())
         .then(json => this.setState({ done: true }));
     }, 4000);

  }


render() {

  return (
    <div>

    
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <MDBCol style={{ maxWidth: "100%" }}>
          <MDBCard>
            <MDBCardImage  id="new-img" waves />
              {
                !this.state.done ? (
                 <ReactLoading type={"bars"} color={"black"}  className="loading-events"/>
                ) : (

                    this.state.EVENTS.map((eve,index) => {
                        if(eve.id===this.props.location.state.id){
                      let spaceRef = storageRef.child('IMAGES/'+this.state.EVENTS[index].imageURL)
                      storageRef.child('IMAGES/'+this.state.EVENTS[index].imageURL).getDownloadURL().then((url)=>{
                          document.getElementById('new-img').src = url;
                    })
                    }
                  })
              )

                }

            {/* <MDBCardBody > */}
            <div className="txt_body"> 
            <h1 style={{fontStyle: "bold"}}>{this.props.location.state.title}</h1>
              <h5><i class="far fa-calendar-alt"></i> {this.props.location.state.date}</h5>
              <pre className="pre" style={{overflow:"hidden"}} >{this.props.location.state.description}</pre>
            </div>
             
            {/* </MDBCardBody> */}
          </MDBCard>
        <MDBBtn outline color="primary" className="backToEvents"><Link  to={'/events'}>Back To Events List</Link></MDBBtn>
        </MDBCol>

    </div>
  )
}
}

export default EventsDetails
