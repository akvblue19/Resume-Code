import React from "react";
import ReactDOM from "react-dom";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Workshops from "./Workshops";
import Hobbies  from "./Hobbies";




function Foreground(){
    return(
        <React.Fragment>
            <div className="foreground">
                <PersonalInfo/>
                <div className="margin-10vh"></div>
                <Education/>
                <Skills/>
                <Projects/>
                <Workshops/>
                <Hobbies/>
                <div className="margin-10vh"></div>
            </div>
        </React.Fragment>

    );
}

export default Foreground;