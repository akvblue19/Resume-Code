import React from "react";
import ReactDOM from "react-dom";
import Foreground from "./Foreground";

function Background(){
    return(
        <React.Fragment>
            <div className = "background">
                <div className="back-1"></div>
                <div className="back-2"></div>
            </div>
            <Foreground></Foreground>
        </React.Fragment>

    );
}

export default Background;