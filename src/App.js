import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/utility/Footer";

function App() {
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
}

export default App;
