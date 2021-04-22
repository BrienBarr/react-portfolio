import React from "react";
import "./style.css";

function Wrapper(props) {
  switch (window.location.pathname){
    case "/about":
      return <div className="container wrapper bio">{props.children}</div>;
    case "/portfolio":
      return <div className="container wrapper portfolio">{props.children}</div>;
    default:
      return <div className="container wrapper">{props.children}</div>;
  }
  
}

export default Wrapper;
