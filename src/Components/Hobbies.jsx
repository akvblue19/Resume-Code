import React from "react";
import Heading from "./Heading";
import Hobby from "./Hobby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward,faTerminal  } from '@fortawesome/free-solid-svg-icons';
import HobbyData from "./HobbyData";

function Hobbies(){
    return(
        <React.Fragment>
            <div className="card-container">
                <Heading
                    color=""
                    icon = {faAward}
                    heading = "Hobbies"
                />

                <div className="workshops-box">
                    {
                        HobbyData.map((val)=>{
                            return(
                                <Hobby
                                    color = "skyblue"
                                    icon = {faTerminal}
                                    name = {val.name}
                                    
                                />
                            );
                        })
                    }
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Hobbies;