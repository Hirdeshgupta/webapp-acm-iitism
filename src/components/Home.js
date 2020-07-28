import React from "react";
import HomeComponent from "./HomeCarousel";
import Video from "./video";
import AboutUs from "./AboutUs";
import EventsCarouselApp from "./EventsCarousel/EventsCarouselApp";
import Preloader from "./Preloader";
import {MDBAnimation } from "mdbreact"
import AboutISM from "./AboutISM";
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
        <div>
          <script src="https://cdnjs.com/libraries/fullPage.js"> </script>
          <div id="fullpage">
            <div className="section">
              <Video/>
            </div>
            <div className="section">
              <AboutISM/>
            </div>
            <div className="section">
              <AboutUs/>
            </div>
            <div className="section">
              <Benefits/>
            </div>
            <div className="section">
              <EventsCarouselApp style={{marginTop:80}}/>
            </div>
           {/* <AboutISM  className="section" />
           <AboutUs  className="section" />
           <EventsCarouselApp className="section" style={{marginTop:80}} /> */}
          </div>
          </div>
      )
    }
  }
}

export default Home;
