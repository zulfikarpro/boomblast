import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  body: {
    fontFamily: "poppins"
  },
  container: {
    // backgroundColor = "black",
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#303030",
    fontSize: "48px",
    textDecoration: "none"
  },
  texting:{
    color: "#525252",
    fontSize: "16px"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "white",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
