import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Home from "views/Home/Home.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import AboutUs from "views/AboutUs/AboutUs.js";
import OurTeam from "views/OurTeam/OurTeam.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path ="/aboutus" component={AboutUs}/>
      <Route path="/contactus" component={ContactUs}/>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/our-team" component= {OurTeam} />
      <Route path="/component" component= {Components} /> */}
      <Route exact="/" component={Home} />
      <Route><h1>404</h1></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
