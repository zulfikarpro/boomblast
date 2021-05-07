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
// import{GridContainer, GridItem} from "../Grid"

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const alamat = "RUKO ALAM SUTRA \nJL. SAMARA 9 NO 17 PARAMOUNT GADING SERPONG, \nTANGERANG – BANTEN."
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
  // return (
  //   <footer className={classes.footer} style={{paddingTop:"5%"}}>
  //     <div className={classes.container1}>
  //       <div className={classes.box1}>
  //         <div className={classes.title}>
  //         <span style={{color: "#FF6C8F"}}>
  //         <i class="fas fa-map-marker"></i>
  //         </span>
  //         Lokasi
  //         </div>
  //         <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black",textAlign: "left"}}>
  //         RUKO ALAM SUTRA <br></br>
  //         JL. SAMARA 9 NO 17 PARAMOUNT GADING SERPONG,<br></br>
  //         TANGERANG – BANTEN.
  //         </div>
  //       </div>
  //       <div className={classes.box1}>
  //         <div className={classes.title}>
  //           <span style={{color: "#FF6C8F"}}>
  //           <i class="fas fa-phone"></i>
  //           </span>
  //           Telepon
  //           </div>
  //           <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black", textAlign:"left"}}>
  //           Kantor    : (021) 22227190<br></br>
  //           Admin 1  : (021) 1231-1231<br></br>
  //           Admin 2 : (021) 1231-1231<br></br>FAX : (021) 1231-1231<br></br>
  //         </div>
  //       </div>
  //       <div className={classes.box1}>
  //         <div className={classes.title}>
  //           <span style={{color: "#FF6C8F"}}>
  //           <i class="fas fa-envelope"></i>
  //           </span>
  //           Email
  //           </div>
  //           <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black"}}>
  //             event@boomblastcreative.com
  //           </div>
  //       </div>
  //     </div>
  //     <div className={classes.container1}>
  //       <div className={classes.box1}>
  //         <div className={classes.title}>
  //         <span style={{color: "#FF6C8F"}}>
  //         <i class="fas fa-map-marker"></i>
  //         </span>
  //         Lokasi
  //         </div>
  //         <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black",textAlign: "left"}}>
  //         RUKO ALAM SUTRA <br></br>
  //         JL. SAMARA 9 NO 17 PARAMOUNT GADING SERPONG,<br></br>
  //         TANGERANG – BANTEN.
  //         </div>
  //       </div>
  //       <div className={classes.box1}>
  //         <div className={classes.title}>
  //           <span style={{color: "#FF6C8F"}}>
  //           <i class="fas fa-phone"></i>
  //           </span>
  //           Telepon
  //           </div>
  //           <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black", textAlign:"left"}}>
  //           Kantor    : (021) 22227190<br></br>
  //           Admin 1  : (021) 1231-1231<br></br>
  //           Admin 2 : (021) 1231-1231<br></br>FAX : (021) 1231-1231<br></br>
  //         </div>
  //       </div>
  //       <div className={classes.box1}>
  //         <div className={classes.title}>
  //           <span style={{color: "#FF6C8F"}}>
  //           <i class="fas fa-envelope"></i>
  //           </span>
  //           Email
  //           </div>
  //           <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black"}}>
  //             event@boomblastcreative.com
  //           </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
  return(
    <footer>
      <div className={classes.container1}>
        <div className={classes.filler}>
          <img src={kite}>

          </img>
        </div>
        <div className={classes.box1}>
          <div className={classes.title}>
          <span style={{color: "#FF6C8F"}}>
          <i class="fas fa-map-marker"></i>
          </span>
          Lokasi
          </div>
          <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black",textAlign: "left"}}>
          RUKO ALAM SUTRA <br></br>
          JL. SAMARA 9 NO 17 PARAMOUNT GADING SERPONG,<br></br>
          TANGERANG – BANTEN.
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.title}>
            <span style={{color: "#FF6C8F"}}>
            <i class="fas fa-phone"></i>
            </span>
            Telepon
            </div>
            <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black", textAlign:"left"}}>
            Kantor    : (021) 22227190<br></br>
            Admin 1  : (021) 1231-1231<br></br>
            Admin 2 : (021) 1231-1231<br></br>FAX : (021) 1231-1231<br></br>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.title}>
            <span style={{color: "#FF6C8F"}}>
            <i class="fas fa-envelope"></i>
            </span>
            Email
            </div>
            <div style={{fontSize:"12px", fontFamily:"poppins", padding:"0px", margin:"0px", color:"black"}}>
              event@boomblastcreative.com
            </div>
        </div>
        <div className={classes.filler} style={{alignItems: 'flex-start', paddingTop:"0%"}}>
          <img src={logo}>

          </img>
        </div>
      </div>
      <div className={classes.container2}>
        <div style={{display:'flex', fontFamily:"poppins", fontSize:"12px"}}>
          Copyright © 2021. BoomBlast Creative Event Organizer. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
