import React from "react";
import pomodoro from "../img/Pomodoro.jpg";

const Project:React.FC = () => {

    return (
        <div className="project">
            <div className="projectDetail">
                <img src={pomodoro} />
                <div className="info">番茄鐘</div>
                <div className="button">
                    <div>DEMO</div>
                    <div>Github</div>
                </div>
            </div>
            <div className="projectDetail">
                <img />
                <div className="info">YouTube</div>
                <div className="button">
                    <div>DEMO</div>
                    <div>Github</div>
                </div>
            </div>
        </div>
    );
}
  
export default Project;
  
