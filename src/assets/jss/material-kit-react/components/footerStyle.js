import { container, primaryColor } from "assets/jss/material-kit-react.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    backgroundColor: "white",
    padding: "0.9375rem 0",
    display: "flex",
    zIndex: "2",
    width: "100%",
    justifyContent: 'center',
    flexDirection: 'column',
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    flexDirection: 'row',
    alignItems: 'center',
    flex:"3"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    margin: "20px",
    alignContent: "top",
    flexDirection: 'row',
    flex:"1",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  container2: {
    display: "flex",
    backgroundColor: "#F5F5F5",
    flexDirection: 'row',
    justifyContent: 'center',
    padding: "1%",
  },
  filler:{
    flex:"1",
    paddingTop: "2%",
    flexDirection: 'row',
    display:"flex"
  },
  container1: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'space-between',
    paddingTop: "3%",
    paddingBottom: "1%",
    backgroundColor: 'white'
  },
  box1:{
    flex: "1",
    display: "flex",
    flexDirection: 'column',
    marginLeft: "20px",
    marginRight: "20px",
    alignItems: 'flex-start',
  },
  title:{
    fontStyle:"bold", 
    fontFamily:"poppins", 
    fontSize:"18px", 
    color:"black"}
};
export default footerStyle;
