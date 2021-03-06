import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./component/Navbar";
import Index from "./component/Index";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/ultra-profile" component={Index} exact />
          <Route path="/ultra-profile/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
