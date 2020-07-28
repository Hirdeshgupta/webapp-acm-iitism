import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

function benefits(){
    return(
        
        <div style={{margin:"20px 0"}}>
        <img className="bene" src={require("./benefits-02.png")}></img>
        <Fragment>
        <MDBBtn gradient="peach" className="join" size="lg" href="https://forms.gle/D2VcWQbNTDRpNwsr6">Join Now</MDBBtn>
      </Fragment>
        </div>
    )
}

export default benefits;