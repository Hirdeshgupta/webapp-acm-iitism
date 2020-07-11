import React from "react";
import HomeComponent from "./HomeCarousel";
import AboutUs from "./AboutUs";
import EventsCarouselApp from "./EventsCarousel/EventsCarouselApp";
import Preloader from "./Preloader";
import {MDBAnimation } from "mdbreact"
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
  document.querySelector("body").style.overflow="hidden";
  setTimeout(()=>{
    this.setState({
      isLoading:false
    })
    document.querySelector("nav").style.opacity=1;
    document.querySelector("#footer").style.opacity=1;
    document.querySelector("body").style.overflow="scroll";

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
    return (
      <div className="home-div">
        <MDBAnimation type="fadeIn" >
          <HomeComponent />
        <AboutUs />
        <EventsCarouselApp style={{marginTop:80}}/>
        </MDBAnimation>

      </div>
    )
    }
  }
}

export default Home;
