import React from 'react'

function Video(){
    return(
        <div style={{marginTop:"0"}}>
<video width="100%" height="100%" autoPlay muted>
  <poster src={require('./logo.png')}/>
  <source src={require("./img/vid.mp4")} type="video/mp4"/>
  {/* <source src={require("./img/vid.ogg")} type="video/ogg"/> */}
{/* Your browser does not support the video tag. */}
</video>
        </div>

    )

}

export default Video;