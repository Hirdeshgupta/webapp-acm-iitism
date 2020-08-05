import React from "react";
import HomeComponent from "./HomeCarousel";
import Video from "./video";
import AboutUs from "./AboutUs";
import EventsCarouselApp from "./EventsCarousel/EventsCarouselApp";
import Preloader from "./Preloader";
import {MDBAnimation } from "mdbreact"
import AboutISM from "./AboutISM";
import Typewriter from "./typewriter";
import Benefits from "./benefits";
// import './fullPage/dist/fullpage.css';
// import  './fullPage/dist/fullpage.js';
// import  './fullPage/vendors/scrolloverflow.min.js';

// var fullPageInstance = new fullpage('#fullpage', {
//   navigation: true,
// });


class  Home extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isLoading:true
    }
}
componentDidMount()
{

  document.querySelector("nav").style.opacity=0;
  document.querySelector("#footer").style.opacity=0;
  document.querySelector("html").style.overflowY="hidden";
  setTimeout(()=>{
    this.setState({
      isLoading:false,
    })
    document.querySelector("nav").style.opacity=1;
    document.querySelector("#footer").style.opacity=1;
    document.querySelector("html").style.overflowY="scroll";

  },2000);


}
  render(){
    if(this.state.isLoading)
		{
			return(
				<Preloader/>
      )
    }
		else{
    // return (
    //   <MDBAnimation type="fadeIn" >
    //   <div className="home-div">
    //     <Video />
    //     <AboutISM />
    //     <AboutUs />
    //     <EventsCarouselApp style={{marginTop:80}}/>

    //   </div>
    //   </MDBAnimation>
    // )
      return(
              <MDBAnimation type="fadeIn" >
        <div className="main-home">
              {
                window.innerWidth<500 ? <Typewriter /> :<Video/>
              }
              <AboutISM/>
              <AboutUs />
              <Benefits/>
              <EventsCarouselApp style={{marginTop:80}}/>
          </div>
                </MDBAnimation>
      )
    }
  }
}

export default Home;
