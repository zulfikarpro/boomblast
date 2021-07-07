import React, { Table } from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js"

import styles from "assets/jss/material-kit-react/views/landingPageSections/eventStyle.js";
import eventResponse from "eventResponse.json"
import { BorderColor } from '@material-ui/icons';
// import img1 from "assets/img/event/img1.png"



const useStyles = makeStyles(styles);
export default function EventSection(props) {
    const classes = useStyles();
    // const response = eventResponse;
    const responseData = eventResponse.data;
    const setDate = (dateParam) =>{
      var d = new Date(dateParam),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    const setDescription = (wordParam) =>{
      const loc = 300;
      let word = ''
      if(wordParam.length>loc){
        word = wordParam.substring(0,loc-1)+'...';
      }else{
        word = wordParam;
      }
      return word;
    }
    
    const buttonHandler = (data) =>{
      console.log('data '+ data.id);
    }
    const {contentData} = props;
    
    return (
      <div style={{justifyContent:'center', display:'flex', width:'100%', height:'auto', marginBottom:'10%'}}>
        <div style={{justifyContent:'center', display:'flex', width:'80%', flexDirection:'column'}}>
          <div style={{marginTop:'1%', marginBottom:'1%', alignSelf:'flex-end'}}>
            <Link  to={{
              pathname: "/admin/editevent",
              edit: true
            }}>
            Create New Event
            </Link>
          </div>
          {contentData.map((data)=>{
            console.log('data'+JSON.stringify(data));
            return <GridContainer key={data.id.toString()} style={{borderCollapse:'collapse'}}>
              <GridItem md={3} style={{border:'1px solid black', borderCollapse:'collapse'}}>
                <Card plain>
                  <img src={require('assets/img/event/'+data.image)} alt='events'/>
                </Card>
              </GridItem>
              <GridItem md={6} style={{border:'1px solid black', borderCollapse:'collapse', display:'flex', flexDirection:'column'}}> 
                  <h2 style={{alignSelf:'center', height:'15%'}}>{data.name}</h2>
                  <p style={{height:'80%'}}>Description : {setDescription(data.description)}</p>
                  <p style={{alignSelf:'left', height:'5%'}}>Seat : {data.seat}</p>
                  <p style={{alignSelf:'left', height:'5%'}}>Event Date : {setDate(data.date)}</p>
              </GridItem>
              <GridItem md={3} style={{border:'1px solid black', borderCollapse:'collapse', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                {/* <Link style={{justifyContent:'center'}} to={{
                  pathname: "/admin/editevent",
                  data:data
                }}> */}
                {/* <Button style={{backgroundColor:'transparent'}}> */}
                <Link style={{alignSelf:'center'}} to={{
                  pathname: "/admin/editevent",
                  data
                }}>
                  Edit
                </Link>
                {/* </Button> */}
                {/* </Link> */}
              </GridItem>
            </GridContainer>
          })}
          {/* </table> */}
        </div>
      </div>
    )
}
