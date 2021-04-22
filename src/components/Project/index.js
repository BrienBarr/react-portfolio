import React from "react";
import "./style.css";

// const styles = {
//   card: {
//     borderColor: "black",
//     // borderStyle: "solid",
//     // borderWidth: "1px"
//   }
// }

function Project (props) {
  return (
    <div className="col-lg-4">          
      <div 
        className="card smallcard"
        // styles={styles.card}
      >
        <img 
          className="card-img-top img-thumbnail medium" 
          src={props.image} 
          title={props.projectName} 
          alt={props.projectName}
        />
        <div className="card-body">
          <p className="card-text">
            <a 
              href={props.deployed} 
              target="_blank" 
              rel="noreferrer"
            >
              {props.projectName}
            </a>
            <br/>
            {props.repoHost}: 
            <a 
              href={props.repository} 
              target="_blank" 
              rel="noreferrer"
            >
              {props.repoName}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project