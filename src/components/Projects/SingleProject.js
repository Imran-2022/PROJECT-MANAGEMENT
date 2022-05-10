import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonData from "../../../src/Fake.json"
import "./SingleProjects.css"
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
const SingleProject = () => {
    const { abc } = useParams()
    const [singleProject, setSingleProject] = useState(...JsonData.filter(x => x.id === abc));
    const { id, description, imgUrl, project_name, title, frontEnd, BackEnd, deployment, videoUrl } = singleProject;
    useEffect(() => {
        // move to top of page while click on link react js
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Link to="/" className="back-btn">Back to Home</Link>
            <div className="single-Project" key={id}>
                {/* <iframe className="single-project-image"  src={videoUrl} title="video"></iframe> */}
                <ReactPlayer light={imgUrl} className="single-project-image" playing={true} controls={true} loop={false} url={videoUrl} />
                <div className="project-details">
                    <div className='video-text'>
                        <p>Play the above video to see the details 🚀</p>
                    </div>
                    <h3>Project</h3>
                    <p>{project_name}</p>
                    <h3>Title </h3>
                    <p>{title}</p>
                    {/* technologies used : */}
                    <h3>technologies used :</h3>
                    <h4>Front-end</h4>

                    <div className="fronend">
                        {
                            frontEnd.split(",").map((d, idx) => {
                                return (
                                    <p key={idx}> {d}</p>
                                )
                            })
                        }
                    </div>
                    <h4>Back-end</h4>
                    <div className="backend">
                        {
                            BackEnd.split(",").map((d, idx) => {
                                return (
                                    <p key={idx}> {d}</p>
                                )
                            })
                        }
                    </div>
                    <h4>deployment</h4>
                    <div className="deployment">
                        {
                            deployment.split(",").map((d, idx) => {
                                return (
                                    <p key={idx}> {d}</p>
                                )
                            })
                        }
                    </div>
                    {/* description */}
                    <h3>Descriptiion :</h3>
                    <h4>What user can do ?</h4>
                    {
                        description.split("||").map((d, idx) => {
                            return (
                                <p key={idx}> {idx + 1} . {d}</p>
                            )
                        })
                    }
                    <h4>What only Admin can do ?</h4>
                    {
                        description.split("||").map((d, idx) => {
                            return (
                                <p key={idx}> {idx + 1} . {d}</p>
                            )
                        })
                    }
                    <div className="details-btn">
                        <button className="btn project-btn">FrontEnd Code</button>
                        <button className="btn project-btn">Backend Code</button>
                        <button className="btn project-btn">Live View</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject;