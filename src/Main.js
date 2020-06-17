import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Footer from './components/Footer'
import TopNav from "./components/TopNav";
import Sponsors from "./components/Sponsors"
import TeamPage from "./components/TeamPage"

class Main extends React.Component{

    render(){
        return(
          <BrowserRouter>
          <div>
            <TopNav />
              <Switch>
               <Route path="/" component={Home} exact/>
               <Route path="/sponsors" component={Sponsors}/> 
               <Route path="/TeamPage" component={TeamPage}/> 
             </Switch>
             <Footer /> 
          </div> 
        </BrowserRouter>
        )
    }
}
export default Main;
