import React from 'react';
import { useParams } from 'react-router-dom';
import "./Projects.css"
const SingleProject = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <p>here project Details</p>
        </div>
    );
};

export default SingleProject;