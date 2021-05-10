import { container, primaryColor } from "assets/jss/material-kit-react.js";

const footerStyle = {
  footer:{
    backgroundColor: "purple",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  },
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    marginTop:'10px'
  },
  container2:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
  }
};
export default footerStyle;
