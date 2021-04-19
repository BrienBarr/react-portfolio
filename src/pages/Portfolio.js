import React, { Component } from "react";
import Project from '../components/Project';
import projects from "../projects.json";

class Portfolio extends Component {

  state = {
    projects
  };


  render(){
    return (
      <div className="portfolio">

        <div className="row">
          <div className="col-lg-12">
            <h1>Portfolio</h1>
          </div>
        </div>

        <div className="row center">
          {this.state.projects.map(item => (
            <Project
              projectName={item.projectName}
              image={item.image}
              deployed={item.deployed}
              repoHost={item.repoHost}
              repoName={item.repoName}
              repository={item.repository}
            />
          ))}
        </div>

      </div>
    )
  }
}

export default Portfolio