import React from "react";
import {  MDBRow, MDBCol, MDBIcon,MDBAnimation } from "mdbreact";
function AboutISM() {
  return (
      <div className="container-fluid px-0" >
<section className="text-center my-0 my-md-5 z-depth-2 mx-0 mx-md-5 py-2 px-2 about">
        <MDBAnimation reveal type="fadeInUp">
            <h2 className="h1-responsive font-weight-bold my-5" style={{color:"#1a1245"}}>
            ABOUT INSTITUTION
            </h2>
          </MDBAnimation>

          <MDBAnimation reveal type="fadeInUp">
        <p className="p-responsive para w-responsive mx-auto px-auto mb-5 con abouts about-ism">
        IIT(ISM) Dhanbad is one of the oldest institutions in India established in the year 1926. It was established on the lines of Royal School of Mines-London under the name Indian School of Mines located in Dhanbad, Coal Capital of India. Indian School of Mines started by offering Mining Engineering, Applied Geology, Applied Physics, Applied Chemistry, Applied Mathematics and gradually started offering core courses of Computer Science, Electrical, Electronics etc expanding from Earth Sciences to technical side.
Later in the year 2016, Indian School of Mines was awarded the tag of an IIT and renamed as Indian Institute of Technology(Indian School of Mines), Dhanbad.
With a clear intent of the institution to improve the amount of research and projects in the institution, it has invested most of it's resources dedicated towards the projects and research.
        </p>
          </MDBAnimation>
          <img src="https://www.iitism.ac.in/~academics/assets/assets/images/index/01.jpg"></img>

</section>
</div>
  );
}

export default AboutISM;
