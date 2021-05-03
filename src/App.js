import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact noslash path="/" component={Home} />
          <Route exact noslash path="/about" component={About} />
          <Route exact noslash path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;