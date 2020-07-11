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
  setTimeout(()=>{
    document.querySelector("nav").style.opacity=1;
    this.setState({
      isLoading:false
    })
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
