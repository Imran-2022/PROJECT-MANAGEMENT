import React, { useState } from 'react';
import "./Projects.css"
import JsonData from "../../../src/Fake.json"
const Projects = () => {
    const [projects, setProjects] = useState(JsonData.slice(0, 20));
    return (
        <div className="projects">
            {
                projects.map((dt) =>{
                    const {id,description,imgUrl,project_name,title}=dt;
                    console.log(id,description,imgUrl,project_name,title);
                    return (
                        <div className="project" key={id}>
                            <img src={imgUrl} alt="project-img" />
                            <div className="project-details">
                                <p>Project : {project_name.slice(0,20)}</p>
                                <p>Title : {title.slice(0,60)}</p>
                                <p>description : {description.slice(0,100)}</p>
                                <button className="project-btn">Details here</button>
                               {/* <div className="project-btn">
                               <button className="btn">Details</button>
                               <button className="btn">Details</button>
                               </div> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Projects;