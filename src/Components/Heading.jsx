import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Heading(props){
    var Color={
        color :props.color,
    }
    return(
       
        <React.Fragment>
            <div className="main-heading">
                    <FontAwesomeIcon style={Color} icon={ props.icon} className="ed-ql-icon"></FontAwesomeIcon>
                    <span className="ed-ql">{props.heading}</span>
                </div>
        </React.Fragment>
    );
}

export default Heading;