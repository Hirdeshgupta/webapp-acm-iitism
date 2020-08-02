import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import {MDBAnimation} from "mdbreact"
function benefits(){
    return(

        <div style={{margin:"20px 0"}} id="benefit">
        <MDBAnimation reveal type="fadeIn">
        <MDBAnimation reveal type="zoomIn">
        <div className="bene">
          <div className="bene-div"></div>
        </div>
        </MDBAnimation>
        </MDBAnimation>
        <Fragment>
        <MDBBtn gradient="peach" className="join-acm" size="lg" href="https://forms.gle/D2VcWQbNTDRpNwsr6">Join Now</MDBBtn>
      </Fragment>
        </div>
    )
}


export default benefits;
