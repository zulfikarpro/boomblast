import React, { Component } from 'react';

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import leaf from "../../../assets/img/leaf.png"

import styles from "assets/jss/material-kit-react/views/landingPageSections/clientStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

import tri from "assets/img/tri.png";
import kapalApi from "assets/img/kapalapi.png";
import axis from "assets/img/axis.png";
import unakaffe from "assets/img/unakaffe.png";
// import tri from "assets/img/tri.png";

const useStyles = makeStyles(styles);
export default function ClientSection() {
    const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
    return (
      <div style={{display:"flex", flexDirection: 'column'}}>
        <h2 className={classes.title}>Our Client</h2>
        <div className={classes.container}>
          <img className={classes.image}src={leaf} style={{zIndex:"2"}}>
          </img>
          <div className={classes.container2} >
            <div className={classes.section} >
              <div style={{justifyContent: 'center'}}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={tri} alt="..." className={imageClasses} />
                      </GridItem>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={kapalApi} alt="..." className={imageClasses}/>
                      </GridItem>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={axis} alt="..." className={imageClasses}/>
                      </GridItem>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );
}
