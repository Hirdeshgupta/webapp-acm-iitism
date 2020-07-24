import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Footer from './components/Footer'
import TopNav from "./components/TopNav";
import EventsApp from "./components/Events/EventsApp";
import EventsDetails from "./components/Events/EventsDetails";
import Sponsors from "./components/Sponsors"
import TeamPage from "./components/TeamPage"
import ContactUs from "./components/ContactUs";
import Achievements from "./components/Achievements";
import './animate.css';
import Preloader from "./components/Preloader"
import {MDBAnimation } from "mdbreact"
import ScrollToTop from "./components/ScrollToTop";
class Main extends React.Component{

    // constructor(props)
    // {
    //   super(props);
    //   this.state = {
    //     isLoading:true
    //   }
	// }
	// componentDidMount()
	// {
	// 	setTimeout(()=>{
	// 		this.setState({
	// 			isLoading:false
	// 		})
	// 	},2000,()=>{
	// 		document.getElementById("root").style.animation="anime-entry 10s ease forwards";
	// 	})
	
	// }
    render(){
			return(
				<MDBAnimation  type="fadeIn">
			<BrowserRouter>
			<div>
				<TopNav />
				<ScrollToTop>
				<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/events" exact component={EventsApp} />
				<Route path="/events/:id" component={EventsDetails} />
				<Route path="/achievements" component={Achievements} />
				<Route path="/sponsors" component={Sponsors}/>
				<Route path="/TeamPage" component={TeamPage}/>
				<Route path="/ContactUS" component={ContactUs} />
				</Switch>
				</ScrollToTop>
				<Footer />

			</div>
			</BrowserRouter>
			   </MDBAnimation>
			
			)
    }
}
export default Main;
