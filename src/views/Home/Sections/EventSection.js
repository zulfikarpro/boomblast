import React, { Component } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/eventStyle.js";
import eventResponse from "eventResponse.json"
// import img1 from "assets/img/event/img1.png"


const useStyles = makeStyles(styles);
export default function EventSection(props) {
    const classes = useStyles();
    const response = eventResponse;
    const responseData = eventResponse.data;
    const gridData = (data) =>{
      const column = 3;
      for(var i =0; i<data.length; i++){
        // console.log(data[i].title)
        // data[i].title
      }
    }

    // useEffect(()=>{

    // },[]);
    const {contentData} = props;
    return (
      <div className={classes.container}> 
        <div>
          <h2 className={classes.title}>{contentData.title}</h2>
          <div className={classes.lineSeparator}></div>
        </div>
        {/* {gridData(responseData)} */}
        <div className={classes.container2}>
          <GridContainer spacing={6} direction="row-reverse">
            {responseData.map( data=>{
              const image = data.image
              return <GridItem xs={12} sm={6} md={4}>
                <Card plain>
                  <img src={require('assets/img/event/'+data.image)} alt='event'/>
                  {/* <h4>{data.image}</h4> */}
                </Card>
                {/* <h1>{data.title}</h1>
                <h4>{data.description}</h4> */}
                
              </GridItem>
              })}
          </GridContainer>
        </div>
      </div>
    )
}
