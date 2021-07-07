import React from 'react'

import dotenv from 'dotenv'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";
// // import SubmitButton from './component/SubmitButton'
// // import ReactDOM from 'react-dom'
// // import Registration from './Registration'
// // import Nav from './page/Nav'
// // import Shop from './Shop'

// import './App.css'
// import Map from './component/MapComponent'
// import RegistrationForm from './component/RegistrationForm.js'
// import LoginForm from './component/LoginForm.js'
// import Nav from './page/Nav'
import "assets/scss/material-kit-react.scss?v=1.9.0";


import Home from "views/Home/Home.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import AboutUs from "views/AboutUs/AboutUs.js";
import OurTeam from "views/OurTeam/OurTeam.js";
import AdminPage from "views/Admin/AdminPage.js"
import AdminLogin from "views/Admin/LoginPage/LoginPage.js";
import EditEvent from 'views/Admin/EditEvent.js'

const hist = createBrowserHistory();

const App = () => {
    console.log('prod1802')
    return(
    <Router history={hist}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path ="/aboutus" component={AboutUs}/>
            <Route exact path="/contactus" component={ContactUs}/>
            <Route exact path="/admin/editevent" component={EditEvent}/>
            <Route exact path="/admin/login" component={AdminLogin}/>
            <Route exact path="/admin" component={AdminPage}/>
            {/* <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/our-team" component= {OurTeam} />
            <Route path="/component" component= {Components} />
            <Route exact="/" component={Home} /> */}
            <Route><h1>404</h1></Route>
        </Switch>
    </Router>
    )
}
export default App;



