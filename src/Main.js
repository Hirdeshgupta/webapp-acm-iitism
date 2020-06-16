import React from "react"
import Footer from './components/Footer'
import TopNav from "./components/TopNav";

class App extends React.Component{

    render(){
        return(
          <div>
            <TopNav />
            <Footer />
          </div>
        );
    }
}
export default App;
