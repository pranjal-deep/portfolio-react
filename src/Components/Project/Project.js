import React from 'react';
import './Project.css';

const Project = (props) => {
    
    return(
        <div className="project-wrapper">
                <div className="project-tile">
                        <div id="project-image">
                            <img src={props.tileImage} alt="Tile-Image"/>
                        </div>
                        <div id = "project-content">
                            <h1>{props.title}</h1>
                            <h2>{props.subtitle}</h2>
                            <p className="text-overflow">{props.description}</p>
                        </div>
                    </div>
                </div>
    );
}

export default Project;