import React from "react";

function Skill(props){
    return(
        <React.Fragment>
            <div className="skill-box">
                <img src={props.imgsrc} className="skill-image"/>
                <span className="skill-name" alt="" style={{color:props.color}}>{props.skill}</span>
            </div>
        </React.Fragment>
    );
}

export default Skill;