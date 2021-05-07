import React, { Component } from 'react';

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/landingPageSections/eventStyle.js";
import eventResponse from "eventResponse.json"


const useStyles = makeStyles(styles);
export default function EventSection(props) {
    const classes = useStyles();
    const response = eventResponse;
    return (
      <div className={classes.container}> 
        <div className={classes.container2}>
        <h2 className={classes.title}>Our Latest Event</h2>
        {/* {response.data.map(block=>Components(block))} */}
        </div>
        <div className={classes.container2}>
            {response.data.map(data=>{return <h2>{data.title}</h2>})}
        </div>
      </div>
    )
}
