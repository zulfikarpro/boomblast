/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list} style={{fontFamily:"poppins", fontWeight:"600"}}>
      <ListItem className={classes.listItem}>
        <Link to='/'>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >Home</Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >About Us</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >Our Team</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to='/profile-page'>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            Contact Us
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
