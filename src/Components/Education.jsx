import React from "react";
import Heading from "./Heading";
import EduQualifications from "./EduQualifications";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faUniversity,faSchool } from '@fortawesome/free-solid-svg-icons';

function Education(){
    return(
        <React.Fragment>
            <div className="card-container">
                <Heading
                    color = "black"
                    icon = {faUserGraduate}
                    heading = "Educational Qualification"
                />
                
                <EduQualifications
                    color = ""
                    icon = {faUniversity}
                    qualification= "Graduation"
                    year = "2016-2020"
                    stream = "B.Tech. (Computer Science &amp; Engineering)"
                    college = "Raj Kumar Goel Institute of Technology, Ghaziabad, U.P."
                    percentage = "Percentage :   78.74%"
                />
                <hr></hr>
                <EduQualifications
                    color = ""
                    icon = {faSchool}
                    qualification= "Intermediate"
                    year = "2015"
                    stream = "Science"
                    college = "Sant Atulanand Convent School,Varanasi,U.P."
                    percentage = "Percentage :   80.40%"
                />
                <hr></hr>
                <EduQualifications
                    color = "green"
                    icon = {faSchool}
                    qualification= "High School"
                    year = "2013"
                    stream = "Science"
                    college = "Sant Atulanand Convent School,Varanasi,U.P."
                    percentage = "CGPA : 9.6/10"
                />
                <div className="margin-bottom-edu"></div>
                
            </div>
        </React.Fragment>
    );
}

export default Education;