import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hobby(props){
    return(
        <React.Fragment>
            <div className="workshop-box">
                <div className="workshop-name-box">
                    <FontAwesomeIcon style={{color:props.color}} className="workshop-name-icon" icon={props.icon}></FontAwesomeIcon>
                    <span className="workshop-name">{props.name} </span>
                </div>
            </div>
        </React.Fragment>
    );

} 

export default Hobby;