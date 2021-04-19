import React from "react";
import headshot from "../../assets/images/headshot.jpg";
import "./style.css"

function Bio () {
  return (
    <div className="bio">
      <div className="row">
        <div className="col-lg-12">
          <h1>About Me</h1>
        </div>
        <div className="col-lg-12">
          <img 
            className="img-thumbnail medium float-left" 
            src={headshot} 
            title="Brien Barr" 
            alt="Brien Barr"
          />
          <p>
            My name is Brien Barr.  I was born in Danville, IN, and I have lived in Indiana my whole life.
            I studied at Ball State University in Muncie, IN.  After four years studying there, I obtained a 
            Bachelor of Arts degree, majoring in Telecommunications with a Audio/Video Production concentration 
            with a minor in Film Studies.
          </p>
          <p>
            After graduating from Ball State, I attended the Recording Workshop in Chillicothe, OH.  There, I obtained 
            certificates in Audio Engineering, Studio Maintenance, Advanced Audio Engineering, and Emerging Audio Technologies.
          </p>
          <p>
            Upon leaving the Recording Workshop, I was able to find a job at the company where I am currently employed.  
            My first duties included assisting in audio and video editing, maintaining and updating the company website, and 
            maintaining the in-house data servers, workstations, and network.
          </p>
          <p>    
            After 18 years, I am still with the same company.  In addition to maintaining and updating the company website, in-house 
            data servers, workstations, and network, I am the content production manager, a project manager, a project estimator, and 
            a systems programmer.  I also create the company's marketing materials for web and print.  Among these positions, I have
            also been a project coordinator.
          </p>
          <p>
            I have been happily married for three years.  My wife and I just had identical twin girls in March of 2020.  When I am
            not working or in school, I enjoy spending time with my wife and daughters.  We also have four dogs.  We have a 
            Jack Russell and Wiener dog mix (Nibbles), a Chinese Crested Powderpuff (Darwin), a Pitbull/Chihuahua mix (Edgar), and a 
            Pitbull/Terrier mix (Maddy). I am also a big fan of football, baseball, and basketball, rooting for the Indianapolis 
            Colts, Cincinnati Reds, and the Indiana Pacers.  I also enjoy reading and collecting comics and reading Star Wars and 
            James Bond novels.  I am also a huge fan of movies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio