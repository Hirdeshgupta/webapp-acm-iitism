import React from 'react'
import Typewriter from 'typewriter-effect';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
const  typewriter = () => {
    return (
      <MDBContainer className="z-depth-0" style={{padding:0,margin:0}}>
        <MDBRow>
          <MDBCol className="z-depth-0">
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol className="text-white text-center px-0 " style={{height:"60vh", backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                <MDBCol className="py-5 px-0">
                  <MDBCardTitle className="h1-responsive pt-5 my-5 font-bold text-white" style={{fontFamily:"FF Tisa" ,fontSize:"2.5rem",padding:"0 35px 0px 35px"}}><Typewriter
                    options={{
                        strings: ['ACM STUDENT CHAPTER '],
                        autoStart: true,
                        loop: true,
                      }}
        
                    onInit={(typewriter) => {
            typewriter.typeString('IIT ISM DHANBAD')
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
                  <a href="#benefit"><MDBBtn  outline color="white" className="mt-5">Join Now </MDBBtn></a>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
  
export default typewriter