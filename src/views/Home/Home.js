import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import ClientSection from "./Sections/ClientSection.js";
import EventSection from "./Sections/EventSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{fontFamily: "poppins"}}>
      <Header
        style={{height:"100px"}}
        color="transparent"
        routes={dashboardRoutes}
        brand="Boomblast Creative"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/group.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{fontFamily:"poppins"}}>Boomblast Creative Event Organizer.</h1>
              <h4 style={{fontSize: "16px", fontFamily:"poppins", color: "#525252"}}>
              Merupakan salah satu anak perusahaan PT. CHRISTAN JAYA ABADI yang bergerak di event planner.Dimana kami ada sebagai promotor atau mediator setiap perusahaan atau pun personal dalam merealisasikan event yang diinginkan sesuai dengan harapan mitra.Guna untuk meningkatkan nilai jual suatu product, meningkatkan kesadaran masyarakat atas suatu product, mengatur suatu acara seminar atau pertemuan, dan pameran ( MICE : Meeting, Investment, Convenction and Exhibition).
              </h4>
              <br />
              <Link to="/contact-us">
              <Button
                color="danger"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-phone" />
                Contact Us
              </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div style={{width:"100%", backgroundColor:"white"}}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container} style={{backgroundColor:"white"}}>
            <ClientSection />
            <EventSection/>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
