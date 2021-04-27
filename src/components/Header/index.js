import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../../assets/images/linkedin.png";
import GitHubIcon from "../../assets/images/github.png";
import Resume from "../../assets/docs/Brien_Barr-Resume.pdf";

const styles = {
  icon: {
    width: "30px",
    height: "auto",
    marginLeft: "10px"
  }
}

function Header () {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark squeeze">
          <span className="navbar-brand mb-1 h1">
            Brien Barr
            <a href="https://www.linkedin.com/in/brien-barr/" target="_blank" rel="noreferrer">
              <img src={LinkedInIcon} style={styles.icon} title="P. Brien Barr - LinkedIn" alt="P. Brien Barr - LinkedIn"/>
            </a>
            <a href="https://github.com/BrienBarr" target="_blank" rel="noreferrer">
              <img src={GitHubIcon} style={styles.icon} title="BrienBarr@Github" alt="BrienBarr@Github"/>
            </a>
          </span>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            className="collapse navbar-collapse justify-content-end font-weight-bold" 
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link 
                  to="/"
                  className={"nav-link"}
                  activeclassname={"nav-link active"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about"
                  className={"nav-link"}
                  activeclassname={"nav-link active"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/portfolio"
                  className={"nav-link"}
                  activeclassname={"nav-link active"}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                    to={Resume} 
                    target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;