import React, {useEffect} from "react";
import {useHistory } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import EventSection from "./Sections/EventSection.js";

// import  from "assets/jss/material-kit-react/views/landingPage.js";
import contentResponse from "contentResponse.json";
import styles from "assets/jss/material-kit-react/views/adminStyle";
import axios from "axios";
// import contentResponse from "../../contentResponse.json"

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function AdmninPage(props) {
    const [token, setToken] = React.useState('');
    let history = useHistory();
    const classes = useStyles();
    const { ...rest } = props;
    const content = contentResponse.data.aboutus;
    const [responseData, setResponseData] = React.useState([]);

  const getData = async () =>{
    var url = process.env.REACT_APP_SERVICE+'event/'
    // const url = process.env.API_URL+'admin/event'
    const config = {headers: {Authorization: 'Bearer '+localStorage.getItem('auth_token')}}
    // console.log(url)
    const data ={}
    const response = await axios.post(url,data,config).then((result)=>{return result.data})
    // console.log('response', response.data)
    if(response.status !== 200){
      console.log(JSON.stringify(response))
      history.push('/admin/login')
    }else{
      setResponseData(response.data)
    }
  }
  
    useEffect(() => {
      // console.log()
    setToken(localStorage.getItem('auth_token'))
    // console.log('localStorage', localStorage);
    if(!localStorage.getItem('auth_token'))
    {history.push('/admin/login')}
    else{
      getData();
    }
    }, [])

  // useEffect(async () => {
  //   console.log('test')
  //   const url = process.env.API_URL+'admin/event'
  //   const data = {}
  //   const config = {headers: {Authorization: token}}
  //   axios.post(url,data,config).then((result)=>{console.log(result)});
  //   // setResponseData(res.data.data);
  //   // return console.log('response', responseData);

  // }, [])


  return (
    <div style={{fontFamily: "poppins", backgroundColor:'white', display:'flex', flexDirection:'column'}}>
      <Header
        style={{height:"100px"}}
        color="white"
        routes={dashboardRoutes}
        brand="Boomblast Creative"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
        <div className={classes.container}> 
            <div styles={{marginBottom:'2%'}}>
                <h2 className={classes.title}>AdminPage</h2>
                <div className={classes.lineSeparator}></div>
                
            </div>
            <EventSection contentData={responseData} styles={{marginBottom:'4%'}}/>
            {/* {eventsectionFunc()} */}
        </div>
        <Footer/>
    </div>
  );
}
