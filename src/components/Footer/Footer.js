/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import kite from '../../assets/img/kite.png'
import logo from '../../assets/img/logo2.png'
import GridContainer from "../Grid/GridContainer"
import GridItem from "../Grid/GridItem"

// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import contentResponse from "contentResponse.json";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const content = contentResponse.data.footer;
  return(
    <footer className={classes.fotoer} style={{backgroundColor: 'white',paddingTop:'2%'}}>
      <div className={classes.container}>
        <div className={classes.container2} style={{zIndex:'1'}}>
          
          <div style={{zIndex:'2',position:'absolute',width:'100%', height:'150px', alignItems:'center', display:'flex', justifyContent:'space-between'}}>
          <img src={kite} style={{ alignSelf: 'flex-start'}}/>
          <img src={logo} style={{width:'190px', height:'150px',alignSelf: 'flex-end'}}/>
        
          </div>
          <GridContainer spacing ={1} style={{zIndex:'3', marginLeft:'50px'}}>
            <GridItem xs={4} md={4} sm={4}>
              <div className={classes.title}>
              <span style={{color: "#FF6C8F"}}>
              <i class="fas fa-map-marker"></i>
              </span>
              {content.lokasi.title}
              </div>
              <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black",textAlign: "left"}}>
              {content.lokasi.detail.split("\n").map(data=>{
                return <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    {data}
                  </GridItem>
                </GridContainer>
              })}
              </div>
            </GridItem>
            <GridItem xs={4} md={4} sm={4}>
              <div className={classes.title}>
                <span style={{color: "#FF6C8F"}}>
                <i class="fas fa-phone"></i>
                </span>
                {content.telepon.title}
                </div>
                <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black", textAlign:"left"}}>
                {content.telepon.detail.map(data=>{
                  return <GridContainer>
                    <GridItem xs={12} md={12} sm={12}>
                      {data}
                    </GridItem>

                  </GridContainer>    
                })}
              </div>
            </GridItem>
            <GridItem xs={12} md={4} sm={4}>
              <div className={classes.title}>
                <span style={{color: "#FF6C8F"}}>
                <i class="fas fa-envelope"></i>
                </span>
                {content.email.title}
              </div>
              <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black"}}>
                {content.email.detail}
              </div>
            </GridItem>
          </GridContainer>
          </div>
          <div className={classes.container} style={{marginTop:'2%'}}>
          <div style={{display:'flex', flexDirection:'column', fontFamily:"poppins", fontSize:"12px"}}>
            <h5 style={{textAlign:'center'}}>
            {content.copyright}
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
