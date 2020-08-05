import React from 'react'
import Typewriter from 'typewriter-effect';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";


class typewriter extends React.Component {
    constructor(props){
      super(props);
      this.state={
        height: "100vh",
      }
    }
    componentDidMount() {
      document.addEventListener("scroll",()=>{
        let scrolled = document.scrollingElement.scrollTop;
        if(scrolled>=40){
          this.setState({height: "60vh"})
        }
    })
    }
    render() {
    return (
      <MDBContainer className="z-depth-0" style={{padding:0,margin:0,}}>
        <MDBRow>
          <MDBCol className="z-depth-0">
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol className="text-white typewriter-col text-center" style={{ height: "95vh",  }}>
                  <MDBCardTitle className=" h1-responsive  font-bold text-white" style={{fontFamily:"FF Tisa" ,fontSize:"2.5rem",position:"absolute",top:"35%",left:40,right:40}}><Typewriter
                    options={{
                        strings: ['ACM STUDENT CHAPTER '],
                        autoStart: true,
                        loop: true,
                      }}

                    onInit={(typewriter) => {
            typewriter.typeString('IIT (ISM) DHANBAD')
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
                console.log('All strings were deleted');
            })
            .start()
        }}
        /></MDBCardTitle>
                  <a className="join-anchor" href="#benefit"><MDBBtn  outline color="white" >Join Now </MDBBtn></a>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
  }

export default typewriter
