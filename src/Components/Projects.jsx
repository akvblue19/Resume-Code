import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faTerminal} from '@fortawesome/free-solid-svg-icons';
import Heading from "./Heading";
import Project from "./Project";
import ProjectData from "./ProjectData";

function Projects(){
    return(
        <React.Fragment>
            <div className="card-container">
                <Heading
                    color = "black"
                    icon = {faCode}
                    heading = "Projects"
                />
                <div className="projects-box">
                    {
                        ProjectData.map((val)=>{
                            return(
                                <Project
                                    color = "blue"
                                    icon = {faTerminal}
                                    Pname = {val.projectName}
                                    link = {val.link}
                                    linkName = {val.linkName}
                                    desc = {val.desc}
                                    techUsed = {val.TechUsed}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Projects;