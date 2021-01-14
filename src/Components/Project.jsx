import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Project(props){
    return(
        <React.Fragment>
            <div className="project-box">
                <div className="project-head-box">
                    <FontAwesomeIcon style={{color:props.color}} className="project-icon" icon={props.icon}></FontAwesomeIcon>
                    <span className="Pname">{props.Pname}</span>
                </div>
                <span className="Pdesc">{props.desc}</span>
                <span className="techUsed">{props.techUsed}</span>
                <a href={props.link} target="_blank" className="Plink"><span>{props.linkName}</span></a>
            </div>
        </React.Fragment>
    );
}

export default Project;