import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "aos/dist/aos.css";
import "./css/App.scss";
import AOS from "aos/dist/aos";
// Components
import Home from "./component/page/Home";
import About from "./component/page/About";
import Contact from "./component/page/Contact";
import Footer from "./component/layout/Footer";

const App = () => {
  AOS.init({
    offset: 50,
    duration: 1500
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
