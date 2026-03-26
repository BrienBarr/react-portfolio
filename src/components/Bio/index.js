import React from "react";
import headshot from "../../assets/images/headshot.jpg";

function Bio () {
  return (
    <div>
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
            My name is Brien Barr.  I was born in Danville, IN, and lived there until June of 2023.  Now I reside in 
            Cypress, TX with my wife and identical twin girls.
            I studied at Ball State University in Muncie, IN.  After four years studying there, I obtained a 
            Bachelor of Arts degree, majoring in Telecommunications with a Audio/Video Production concentration 
            with a minor in Film Studies.
          </p>
          <p>
            After graduating from Ball State, I attended the Recording Workshop in Chillicothe, OH.  There, I obtained 
            certificates in Audio Engineering, Studio Maintenance, Advanced Audio Engineering, and Emerging Audio Technologies.
          </p>
          <p>
            Upon leaving the Recording Workshop, I was able to find a job at a company where I was employed for 19 years.  
            My first duties included assisting in audio and video editing, maintaining and updating the company website, and 
            maintaining the in-house data servers, workstations, and network.
          </p>
          <p>    
            In addition to maintaining and updating the company website, in-house 
            data servers, workstations, and network, I am the content production manager, a project manager, a project estimator, and 
            a systems programmer.  I also create the company's marketing materials for web and print.  Among these positions, I have
            also been a project coordinator.
          </p>
          <p>
            I left my first job in October of 2021 to work for a 100% remote company, where I worked as a frontend/backend 
            software engineer on some web-based applications and Wordpress plugins.  I enjoyed it greatly, along with my coworkers and 
            the culture that was established.
          </p>
          <p>
            I have been married for over 8 years.  My wife gave birth to identical twin girls in 2020.  When I am
            not working or in school, I enjoy spending time with my wife and daughters.  We also have four dogs.  
            We have a Chinese Crested Powderpuff (Darwin), a Pitbull/Chihuahua mix (Edgar), a 
            Pitbull/Terrier mix (Maddy), and a mixed breed female puppy named "Little Girl". I am also a big fan of football, baseball, and basketball, rooting for the Indianapolis 
            Colts, Cincinnati Reds, and the Indiana Pacers.  I also enjoy reading and collecting comics and reading Star Wars and 
            James Bond novels.  I am also a huge fan of movies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio