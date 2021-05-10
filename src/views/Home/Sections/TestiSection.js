import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import styles from "assets/jss/material-kit-react/views/landingPageSections/testiStyle";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import testiResponse from "testiResponse.json"

const useStyles = makeStyles(styles);
export default function TestiSection() {
    const classes = useStyles();
    const responseData = testiResponse.data;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
      ); 
    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.title}>Testimoni</h1>
                <div className={classes.lineSeparator}></div>
            </div>
            <div className={classes.container2}>
                <GridContainer>
                    {responseData.map(data=>{
                        return <GridItem xs={12} sm={6} md={6}>
                                    <Card style={{padding:"5%"}}>
                                        <GridContainer direction="row">
                                            <GridItem xs={12} sm={12} md={3}>
                                                <img className={imageClasses} style={{maxWidth:"100px", maxHeight:"100px"}}src={require('assets/img/faces/'+data.image)} alt='event'/>
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <GridContainer>
                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <div style={{fontFamily:"poppins", fontSize:"14px", paddingTop:"8px"}}>
                                                            {data.testi}
                                                        </div>
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <div style={{fontFamily:"poppins", fontSize:"14px", paddingTop:"8px"}}>
                                                            {`-${data.name}`}
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>
                                    </Card>

                                </GridItem>
                    })}
                    
                </GridContainer>
            </div>
        </div>
    )
}
