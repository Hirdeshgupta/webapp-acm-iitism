import React from "react";
import HomeComponent from "./HomeCarousel";
import AboutUs from "./AboutUs";
import EventsCarouselApp from "./EventsCarousel/EventsCarouselApp";

function Home() {
  return (
    <div className="home-div">
      <HomeComponent />
      <AboutUs />
      <EventsCarouselApp />
    </div>
  )
}

export default Home;
