import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js"

import styles from "assets/jss/material-kit-react/views/contactusStyle";
import contentResponse from 'contentResponse.json'
import jsonData from 'contactusData.json'

const useStyles = makeStyles(styles);

export default function ContactUs(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')
  const data = jsonData.data
  const content = contentResponse.data.contactus;
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
  return (
    <div style={{backgroundColor:'white'}}>
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
      <Parallax style={{display:'flex',flexDirection:'column'}}>
        <div className={classes.container}>
          <div style={{marginBottom:'2%'}}>
            <h2 className={classes.title}>{content.title}</h2>
            <div className={classes.lineSeparator}></div>
          </div>
          <div className={classes.container2}>
            <h4 style={{textAlign:'center'}}>
            Agar dapat membantu anda dalam merencanakan event - event yang anda inginkan, silahkan isi form dibawah  ini, berikut detail acara  sesusai kebutuhan dan keinginan anda. Terima kasih!
            </h4>
          </div>
          <div className={classes.container2} style={{width:"76%", marginBottom:'10%'}}>
            <GridContainer style={{width:'100%'}}>
              <GridItem xs={12} md={12}>
                <CustomInput
                  id="regular"
                  inputProps={{
                    placeholder: "Nama"
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={a=>setName(a)}
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CustomInput
                  id="regular"
                  inputProps={{
                    placeholder: "Email"
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={a=>setEmail(a)}
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CustomInput
                  id="regular"
                  inputProps={{
                    placeholder: "No. Telepon"
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange = {a=>setPhone(a)}
                />
              </GridItem>
              <GridItem xs={12} md={12}>
                <CustomInput
                  id="regular"
                  inputProps={{
                    placeholder: "Deskripsi"
                  }}
                  formControlProps={{
                    fullWidth: true,
                    height: '400px'
                  }}
                  onChange = {a=>setDesc(a)}
                />
              </GridItem>
              <GridItem xs={12} md={12} style={{ display: 'flex', flexDirection:'column', alignContent: 'center', justifyContent: 'center'}}>
                <Button onClick = {handlingInput} className={classes.buttonSubmit}>
                  KIRIM
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
