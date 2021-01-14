import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Workshop(props){
    return(
        <React.Fragment>
            <div className="workshop-box">
                <div className="workshop-name-box">
                    <FontAwesomeIcon style={{color:props.color}} className="workshop-name-icon" icon={props.icon}></FontAwesomeIcon>
                    <span className="workshop-name">{props.workshopName} </span>
                </div>
                <span className="workshop-date">{props.date}</span>
            </div>
        </React.Fragment>
    );
}

export default  Workshop;