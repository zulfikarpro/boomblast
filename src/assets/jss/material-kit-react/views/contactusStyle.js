import { title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const contactusStyle = {
  container: {
    display: "flex",
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-between',
    color: "black",
    fontFamily: 'poppins',
    marginTop:'8%',
    height:'100%'

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
  },
  lineSeparator: {
      height:"5px", 
      backgroundColor:"#FF3767", 
      marginRight:"10%", 
      marginLeft:"10%"
  },
  componentPink:{
    minimumHeight:"20%",
    width:'100%', 
    backgroundColor:"#FF7596"
  },
  componentWhite:{
    minimumHeight:"20%",
    width:'100%', 
    backgroundColor:"#FFF9F9"
  },
  buttonSubmit:{
      width:'20%', 
      alignSelf: 'center', 
      backgroundColor:'#FF7596'
    }
  
};

export default contactusStyle;
