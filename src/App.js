import React from "react"
import Main from './Main'
import { Sugar } from 'react-preloaders';
class App extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Main />
            <Sugar background="linear-gradient(0deg, rgba(26,18,69,1) 40%, rgba(55,114,147,1) 100%)" color="#f5f5f5"/>
          </React.Fragment>
        )
    }
}
export default App 