import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward,faTerminal } from '@fortawesome/free-solid-svg-icons';
import Heading from "./Heading";
import Workshop from "./Workshop";
import WorkshopData from "./WorkshopData";

function Workshops(){
    return(
        <React.Fragment>
            <div className="card-container">
                <Heading
                    color = ""
                    icon = {faAward}
                    heading = "Training &amp; Workshops"
                />
                <div className="workshops-box">
                    {
                        WorkshopData.map((val)=>{
                            return(
                                <Workshop
                                    color = "green"
                                    icon = {faTerminal}
                                    workshopName = {val.name}
                                    date = {val.date}
                                />
                            );
                        })
                    }
                </div>
                
            </div>

        </React.Fragment>
    );
}

export default Workshops;