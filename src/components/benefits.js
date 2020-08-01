import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import {MDBAnimation} from "mdbreact"
function benefits(){
    return(

        <div style={{margin:"20px 0"}} id="benefit">
        <MDBAnimation reveal type="fadeIn">
        <MDBAnimation reveal type="zoomIn">
        <img className="bene" src={require("./benefits-02.jpg")}></img>
        </MDBAnimation>
        </MDBAnimation>
        <Fragment>
        <MDBBtn gradient="peach" className="join" size="lg" href="https://forms.gle/D2VcWQbNTDRpNwsr6">Join Now</MDBBtn>
      </Fragment>
        </div>
    )
}


export default benefits;
