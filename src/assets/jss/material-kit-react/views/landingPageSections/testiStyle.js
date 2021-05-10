import { title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const testiStyle = {
    container: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'space-between',
        color: "black",
        fontFamily: 'poppins'
    
      },
    ...imagesStyle,
    container2:{
        display: 'flex',
        flex:"1",
        flexShrink: '1',
        flexDirection: 'row',
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

    lineSeparator: {
        height:"5px", 
        backgroundColor:"#FF3767", 
        marginRight:"10%", 
        marginLeft:"10%"
    }


}

export default testiStyle;