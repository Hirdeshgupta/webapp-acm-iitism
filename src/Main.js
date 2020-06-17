import React from "react"
import Footer from './components/Footer'
import TopNav from "./components/TopNav";
import AboutUs from "./components/AboutUs";
class App extends React.Component{

    render(){
        return(
          <div>
            <TopNav />
            <AboutUs/>
            <Footer />
          </div>
        );
    }
}
export default App;
