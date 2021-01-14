import React from "react";
import Heading from "./Heading";
import Skill from "./Skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import SkillData from "./SkillData";



function Skills(){
    return(
        <React.Fragment>
            <div className="card-container">
                <Heading
                    color = "blue"
                    icon = {faBrain}
                    heading = "Skills"
                />
                <div className="skills-box">
                    <div className="skills-col">
                    { SkillData.map((val)=>{
                        return(
                             <Skill
                                color = {val.color}
                                imgsrc = {val.imgsrc}
                                skill = {val.skillName}
                            />
                        );
                    })}
                    </div>
                    
                </div>


            </div>
        </React.Fragment>
    );
}

export default Skills;