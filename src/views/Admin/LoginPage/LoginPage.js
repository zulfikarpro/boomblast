import React from "react";
import axios from 'axios';

import {useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import CustomInput from "components/CustomInput/CustomInput.js"

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
// import { Https } from "@material-ui/icons";

const useStyles = makeStyles(styles);
const url = process.env.REACT_APP_SERVICE



export default function LoginPage(props) {
  let history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  React.useEffect(() => {
    // console.log('sessionStorage', localStorage.getItem('auth_token'));
    if(localStorage.getItem('auth_token'))
    {history.push('/admin')}
    }, [])

  const doLogin = async () => {
    try{
      // const url = 'http://localhost:4031/admin/login'
      const res = await axios.post(url+'admin/login', {
        username,password
      }).then((result)=>{return result});
      // alert(res.data.message)
      const {message, status, data} = res.data;
      if(status==200){;
        // console.log('token', result.data.auth_token);
        localStorage.setItem('auth_token', data.auth_token);
        // sessionStorage.setItem('refresh_token', result.data.refresh_token);
        console.log('storage token', localStorage.getItem('auth_token'))
        history.push('/admin')
      }else{
        alert(JSON.stringify(res.data))
      }
      
    }
    catch(e){
      console.log(e);
    }
  }



  return (
    <div>
      <Header
        absolute
        color="white"
        brand="Boomblast Creative"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Admin Login</h4>
                    <div className={classes.socialLine}>
                      {/* <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} /> */}
                      {/* </Button> */}
                    </div>
                  </CardHeader>
                  <p className={classes.divider}></p>
                  <CardBody>
                    <CustomInput
                      labelText="Username"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: ((e)=>{setUsername(e.target.value)}),
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: ((e)=>{setPassword(e.target.value)}),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={doLogin}>
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
