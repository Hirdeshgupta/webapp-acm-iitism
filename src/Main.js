import React from "react"
import Footer from './components/Footer'
import TopNav from "./components/TopNav";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";

class App extends React.Component{

    render(){
        return(
          <div>
            <TopNav />
            <Home />
            <AboutUs/>

            <Footer />
          </div>
        );
    }
}
export default App;
