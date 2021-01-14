import React from "react";
import pic from "../images/image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function PersonalInfo(){
    return(
        <React.Fragment>
            <div className="intro">
                    <div className="intro-1">
                        <img className="image" src={pic} alt="image"/>
                        <sapn className="name">Ankit Kumar Verma</sapn>
                        <hr></hr>
                        <div className="social">
                            <a href=""><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/></a>
                            <a href="https://github.com/akvblue19" target="_blank"><FontAwesomeIcon icon={faGithub} className="github-icon"/></a>
                        </div>
                        <hr></hr>
                        <div className="mail-box">
                          <a href=""><FontAwesomeIcon icon={faEnvelope} className="mail"></FontAwesomeIcon></a>
                          <a href=""><span className="mail-add">erakverma97@gmail.com</span></a>
                        </div>
                        
                    </div>
                    <div className="intro-2">
                        <div className="hello-box">
                            <span className="hello">Hello</span>
                            <span className="who">Here's Who I am</span>
                            <span className="desc">I intend to be a part of an organisation where I can constantlny learn and develop my technical skills and make best
use of it for the growth of the organization, I look forward to establishing myself by adapting new technologies as well.
                            </span>
                        </div>
                        
                    </div>
                </div>
        </React.Fragment>
    );
}

export default PersonalInfo;