import React, { useEffect, useState } from 'react';

import {useHistory } from 'react-router-dom';
import axios from "axios";
import MomentUtils from '@date-io/moment';
// import DateFnsUtils from '@date-io/date-fns'; 
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, TextField } from "@material-ui/core"
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import classNames from "classnames";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js"

import styles from "assets/jss/material-kit-react/views/contactusStyle";
import { ModeComment } from '@material-ui/icons';

const useStyles = makeStyles(styles);

const moment = require("moment");

class LocalizedUtils extends MomentUtils {
  getDatePickerHeaderText(date) {
    return moment(date).format('llll');
  }
}

const EditEvent = (props) =>{


    // moment.tz.setDefault("Asia/Jakarta");
    var url = process.env.REACT_APP_SERVICE+'event/update'
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')
    const [seat, setSeat] = useState('');
    const [images,setImages] = useState(null);
    const [defaultImages, setDefaultImages] = useState(null);
    const [date, setDate] = useState(new Date());
    // const [multiline, setMultiline] = useState('');
    const data = props.location.data
    // const content = contentResponse.data.contactus;
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  
    const handlingInput = () =>{
      var fs = require('fs')
      fs.
      console.log(name, phone, email)
      data[data.length] = {nama:name, phone:phone, email:email}
    }
    let history = useHistory();

    useEffect(() => {
      const getData = async()=>{
        console.log('props edit event',props.location.data) 
        if(props.location.data){
          const{name,description, seat, id, image, date} = props.location.data;
          const thisTime = moment(date);
          setName(name);
          setDesc(description);
          setSeat(seat);
          setId(id);
          setDate(thisTime);
          console.log(moment.locale(), thisTime)
          setDefaultImages(image);
        }
      }
        getData()
      }, [])
      const uploadFoto = (e) => {
        console.log(e.target.files[0]);
        setImages(e.target.files[0]);
        
      }

      const doSubmit = async() => {
        const data = {id,name, image:images, seat, description:desc}
        const config = {headers: {Authorization: 'Bearer '+localStorage.getItem('auth_token')}}
        var request;
        if(props.location.edit){
          request = await axios.post(url, data, config)
        }else{
          url = process.env.REACT_APP_SERVICE+'event/create'
          if(name===undefined && seat===undefined && desc===undefined){
            alert('please complete your form')
          }else{
            request = await axios.post(url,data,config)
          }
        }
        console.log(request);
        if(request.status==200){
          history.push('/admin')
        }else{
          alert(request.status, request.message);
        }
      }
      const dateChangeHandler = (a) =>{
        // setDate(a);
        console.log(a);
      }

    return (
        <div style={{backgroundColor:'white', width:'100%'}}>
          <Header
            color="transparent"
            brand="Boomblast Creative"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 200,
              color: "white"
            }}
            {...rest}
          />
          <div style={{display:'flex',flexDirection:'column'}}>
            <div className={classes.container} style={{alignSelf:'center',width:'80%'}}>
              <div style={{marginBottom:'2%'}}>
                <h3 className={classes.title}>Edit Event</h3>
                <div className={classes.lineSeparator}></div>
              </div>
              <div className={classes.container2} style={{width:"100%", marginBottom:'10%', display:'felx', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                {/* <img style={{width:'30%', height:'auto'}}src={images? require(images) : null} alt={images? images.name : null}/> */}
                <img style={{width:'30%', height:'auto'}} src={
                  images? URL.createObjectURL(images) : defaultImages? require('assets/img/event/'+defaultImages) : null} alt={images? images.name : null
                  }/>
                  <input style={{marginTop:'1%'}} type='file' accept=".jpg,.jpeg,.png" onChange={e=> uploadFoto(e)}/>
                </div>
                <div style={{marginTop:'1%'}}>
                    {/* <InputLabel style={{width:'30%'}}>Event Name:</InputLabel> */}
                    <CustomInput style={{width:'30%'}}
                        id="regular"
                        labelText='Event Name'
                        value = {name}
                        inputProps={{
                            placeholder: "Nama"
                        }}
                        formControlProps={{
                            fullWidth: true
                        }}
                        onChange={a=>setName(a)}
                        />
                </div>
                <div style={{marginTop:'1%'}}>
                        <CustomInput style={{width:'30%'}}
                        id="regular"
                        labelText='Description'
                        value = {desc}
                        multiline = {true}
                        inputProps={{
                            placeholder: "Description"
                        }}
                        formControlProps={{
                            fullWidth: true
                        }}
                        onChange={a=>setDesc(a)}
                        />

                </div>
                <div style={{marginTop:'1%'}}>
                    {/* <h4 style={{width:'30%'}}>Event Name:</h4> */}
                    <CustomInput style={{width:'70%'}}
                        id="regular"
                        labelText='Seat'
                        value={seat}
                        inputProps={{
                            placeholder: "Seat"
                        }}
                        formControlProps={{
                            fullWidth: true
                        }}
                        onChange={a=>setSeat(a.replace(/\D/,''))}
                        />
                </div>
                <div style={{marginTop:'1%'}}>
                <MuiPickersUtilsProvider utils={LocalizedUtils}>
                  {/* <DatePicker 
                  value={date}  
                  onChange={(e)=>{console.log('e',e)}}
                  clearable
                  format=""
                  clearLabel="vider"
                  cancelLabel="annuler"
                  /> */}
                  {/* <TimePicker value={date}  /> */}
                  <DateTimePicker 
                  value={date}  
                  onChange={setDate}
                  clearable
                  format="llll"
                  clearLabel="clear"
                  cancelLabel="cancel"
                  />
                </MuiPickersUtilsProvider>
                  {/* <input
                  defaultValue={date}
                  value={date}
                  type='datetime-local'
                  timeFormat={true}
                  onChange={(a)=>handleChange(a)}
                  />
                  <CustomInput style={{width:'70%'}}
                        id="regular"
                        value="12-07-2021"
                        type='datetime-local'
                        inputProps={{
                            // placeholder: "Seat"
                        }}
                        formControlProps={{
                            fullWidth: true
                        }}
                        onChange={a=>setDate(a)}
                  /> */}
                  
                </div>
                <div style={{alignSelf:'center'}}>
                  <Button onClick={()=>{doSubmit()}}>Submit</Button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
}
export default EditEvent