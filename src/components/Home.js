import React from "react";
import HomeComponent from "./HomeCarousel";
import Video from "./video";
import AboutUs from "./AboutUs";
import EventsCarouselApp from "./EventsCarousel/EventsCarouselApp";
import Preloader from "./Preloader";
import {MDBAnimation } from "mdbreact"
import AboutISM from "./AboutISM";
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
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-extraneous-dependencies */
// import React from "react";
// import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";

// import "./index.css";

// class MySection extends React.Component {
//   render() {
//     return (
//       <div className="section">
//         <h3>{this.props.content}</h3>
//       </div>
//     );
//   }
// }

// const anchors = ["firstPage", "secondPage", "thirdPage"];

// const Home = () => (
//   <ReactFullpage
//     anchors={anchors}
//     navigation
//     navigationTooltips={anchors}
//     sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
//     onLeave={(origin, destination, direction) => {
//       console.log("onLeave event", { origin, destination, direction });
//     }}
//     render={({ state, fullpageApi }) => {
//       console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

//       return (
//         <div>
//          <Video  className="section" />
//          <AboutISM  className="section" />
//          <AboutUs  className="section" />
//          <EventsCarouselApp className="section" style={{marginTop:80}} />
//         </div>
//       );
//     }}
//   />
// );

// ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));