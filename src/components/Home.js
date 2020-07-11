import React from "react";
import HomeComponent from "./HomeCarousel";
import AboutUs from "./AboutUs";
import EventsCarouselApp from "./EventsCarousel/EventsCarouselApp";
import Preloader from "./Preloader";
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

  },2000,()=>{
    document.getElementById("root").style.animation="anime-entry 10s ease forwards";
  })


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
        <HomeComponent />
        <AboutUs />
        <EventsCarouselApp style={{marginTop:80}}/>
      </div>
    )
    }
  }
}

export default Home;
