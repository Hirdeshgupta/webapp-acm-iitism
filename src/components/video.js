import React from 'react'

function Video(){
    return(
        <div style={{marginTop:"0"}}>
<video width="100%" height="100%" autoPlay muted loop poster={require("./abc.jpg")} preLoad="metadata">
  <source src={require("./img/vid.mp4")} type="video/mp4"/>
 Your browser does not support the video tag
</video>
        </div>

    )

}

export default Video;
