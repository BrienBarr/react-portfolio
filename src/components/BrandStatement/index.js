import React from "react";
import headshot from "../../assets/images/headshot.jpg";

function BrandStatement () {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">

          <h1>Brien Barr</h1>

          <img 
            className="img-thumbnail medium float-left" 
            src={headshot} 
            title="Brien Barr" 
            alt="Brien Barr"
          />

          <p>
            Full stack web developer with graphic design and audio/video production experience educated at Ball State University.  
            Skills in HTML, CSS, Javascript, JQuery, PHP, Github, Gitbash, and Node.js.  
            Experienced international marketing, operations, and executive project manager with over 15 years of experience. 
            Managed projects in 12 countries covering 6 continents entailing audiovisual and IT systems for universities, 
            science centers, and museums. Adept in executing strategies to complete projects on time and within budget.  
            Passionate and excited about creating unique user experiences in teams or individually with front-end and back-end 
            coding to create user-friendly, responsive, and stylish web applications.  I enjoy the satisfaction of seeing my 
            code come to life and function properly with an enjoyable user experience.  Able to provide background in user 
            experiences in museums, both in programming and in knowledge of hardware systems, as well as updating and 
            maintaining a corporate website.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BrandStatement