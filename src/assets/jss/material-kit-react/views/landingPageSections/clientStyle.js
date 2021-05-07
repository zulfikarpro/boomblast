import { title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const clientStyle = {
  container: {
    display: "flex",
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    color: "black",

  },
  ...imagesStyle,
  container2:{
    display: 'flex',
    flex:"1",
    flexShrink: '1',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginLeft:"10%",
    marginRight:"10%",
  },
  image:{
    flex:"1",
    flexShrink: '3',
    zIndex: '6',
    position: "absolute",
    width:'15%'
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    fontFamily: "poppins",
    display:"flex",
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  }
};

export default clientStyle;
