import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonData from "../../../src/Fake.json"
import "./SingleProjects.css"
import { Link } from "react-router-dom";
import "./Projects.css"
const SingleProject = () => {
    const { abc } = useParams()
    const [singleProject, setSingleProject] = useState(...JsonData.filter(x => x.id === abc));
    const { id, description, imgUrl, project_name, title } = singleProject;

    console.log(id, description, imgUrl, project_name, title);

    console.log(singleProject)

    return (
        <>
            <Link to="/projects" className="back-btn">Back to Home</Link>
            <div className="single-Project" key={id}>
                <img src={imgUrl} alt="project-img" />
                <div className="project-details">
                    <p>Project : {project_name}</p>
                    <p>Title : {title}</p>
                    <p>description : {description}</p>
                    <div className="details-btn">
                        <button className="btn">Details</button>
                        <button className="btn">Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject;