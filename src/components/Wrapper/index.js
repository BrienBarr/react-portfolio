import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="container wrapper">{props.children}</main>;
}

export default Wrapper;
