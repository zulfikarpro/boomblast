import React from "react";
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

// import  from "assets/jss/material-kit-react/views/landingPage.js";
import contentResponse from "contentResponse.json";
import styles from "assets/jss/material-kit-react/views/aboutUs/aboutUsStyle";
// import contentResponse from "../../contentResponse.json"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
export default function AboutUs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const content = contentResponse.data.aboutus;
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
            <div style={{marginBottom:'2%'}}>
                <h2 className={classes.title}>{content.title}</h2>
                <div className={classes.lineSeparator}></div>
            </div>
            {/* <div className={classes.container2}>
                <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                        <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </h4>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                    <img src={require('assets/img/aboutus.png')} alt='event'/>
                    </GridItem>
                </GridContainer>
            </div> */}
            {/* <div style={{display:'flex', height:'10%', backgroundColor:'#FF7596', width:'100%', marginTop:'3%'}}className={classes.container2}> */}
            <div style={{display:'flex', height:'50%', backgroundColor:'black', flexDirection: 'column', justifyContent:'center', marginBottom:'2%',marginTop:'2%', width:'100%'}}>
                <div className={classes.componentPink}>
                    <div style={{position:'absolute', marginTop:'2%', backgroundImage:'assets/img/vector.png'}}>
                        <img src={require('assets/img/Vector.png')}></img>
                    </div>
                    <div style={{marginTop:'4%', marginBottom:'3%', alignSelf:'center', display:'flex',marginLeft:'10%',marginRight:'10%',paddingRight:'10%', paddingLeft:'10%'}}>
                        <GridContainer>
                            <GridItem md={2} xs={6}>
                            <div style={{marginBottom:'2%', display:'flex', flexDirection:'column'}}>
                                <h3 style={{color:'white', fontWeight:'500', textAlign:'center'}}>Visi</h3>
                                <div className={classes.lineSeparator} style={{alignSelf:'center',width:'80px', backgroundColor:'white', height:'2px'}}></div>
                            </div>
                            </GridItem>
                            <GridItem md={10} xs={6}>
                                <h5 style={{color:'white'}}>
                                    {content.detail.visi}
                                </h5>
                            </GridItem>
                            
                        </GridContainer>
                    </div>
                </div>
                <div className={classes.componentWhite}>
                    <div style={{position:'absolute', right:'0', marginTop:'2%', backgroundImage:'assets/img/vector.png'}}>
                        <img src={require('assets/img/Vector2.png')} style={{height:'5%', widht:'5%',flexShrink:5}}></img>
                    </div>
                    <div style={{color:'#FF7596',marginTop:'4%', marginBottom:'5%', alignSelf:'center', display:'flex',marginLeft:'10%',marginRight:'10%',paddingRight:'10%', paddingLeft:'10%'}}>
                        <GridContainer>
                            <GridItem md={2} xs={6}>
                            <div style={{marginBottom:'2%', display:'flex', flexDirection:'column'}}>
                                <h3 style={{fontWeight:'500', textAlign:'center'}}>Misi</h3>
                                <div className={classes.lineSeparator} style={{alignSelf:'center',width:'80px', backgroundColor:'#FF7596', height:'2px'}}></div>
                            </div>
                            </GridItem>
                            <GridItem md={10} xs={6}>
                                <h5 style={{color:'#ad5368'}}>
                                {content.detail.misi}
                                </h5>
                            </GridItem>
                            
                        </GridContainer>
                    </div>
                </div>     
            </div>
                {/* <h1>
                    asdawdawoidjhabwiukdbawiub
                </h1> */}
            {/* </div> */}
        </div>
        <Footer/>
    </div>
  );
}
