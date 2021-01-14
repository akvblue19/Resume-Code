import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';


function EduQualifications(props){
    return(
        <React.Fragment>
            <div className="graduation-box">
                    <div className="grad">
                        <FontAwesomeIcon className="grad-icon" style={{color:props.color}} icon={ props.icon}></FontAwesomeIcon>
                        <span className="grad-heading">{props.qualification}</span>
                        <span className="grad-year">{props.year}</span>
                    </div>
                    <div>
                        <span className="btech grad-color">{props.stream}</span>
                       
                    </div>
                    <div>
                        <span className="btech">{props.college}</span>
                    </div>
                    <div>
                        <span className="btech grad-color">{props.percentage}</span>
                    </div>
                    
                </div>
        </React.Fragment>
    );
}

export default EduQualifications;