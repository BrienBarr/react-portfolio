import React from "react";
import "./style.css";

const styles = {
  bold: {fontWeight: 'bold'},
}

function Footer () {
  return (
    <footer className="footer footer-dark bg-dark">
      <div className="container">
        <span style={styles.bold}>Brien Barr</span>
        <br/>
        <a href="mailto:brien.barr3320@gmail.com">brien.barr3320@gmail.com</a><br/>
        PH: 317-910-6049
      </div>
    </footer>
  )
}

export default Footer