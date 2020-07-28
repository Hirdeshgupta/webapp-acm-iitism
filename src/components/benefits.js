import React from 'react'
import { Button } from 'reactstrap';

function benefits(){
    return(
        <div style={{margin:"20px 0"}}>
        <img className="bene" src={require("./benefits-02.png")}></img>
        <Button color="primary" className="join" size="lg"  href="https://forms.gle/D2VcWQbNTDRpNwsr6">Join Now</Button>
        </div>
    )
}

export default benefits;