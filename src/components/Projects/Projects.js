import React, { useState } from 'react';
import "./Projects.css"
import JsonData from "../../../src/Fake.json"
import ReactPaginate from "react-paginate";
import { Link} from "react-router-dom";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from 'react-icons/bs';
const Projects = () => {
    const [projects, setProjects] = useState(JsonData.slice(0, 20));
    const [filterProject,setFilterProjects]=useState(projects)
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;

    const displayProjects = filterProject
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((dt) =>{
        const {id,imgUrl,project_name,title}=dt;
        return (
            <div className="project" key={id}>
                <img width="100%" height="250px" src={imgUrl} alt="project-img" />
                <div className="project-details">
                    <p>Project : {project_name}</p>
                    <p>Title : {title}</p>
                     <Link className="link" to={`/projects/${id}`}><button className="project-btn">Details here</button></Link>
                   
                </div>
            </div>
        )
    })
    const pageCount = Math.ceil(projects.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
        <div className="projects">
            {
                displayProjects
            }
        </div>
        <div className="App-pagination">
               {
                   filterProject.length>6 &&  <ReactPaginate
                   previousLabel={<BsFillArrowLeftCircleFill />}
                   nextLabel={<BsFillArrowRightCircleFill  className="haha"/>}
                   pageCount={pageCount}
                   onPageChange={changePage}
                   containerClassName={"paginationBttns"}
                   previousLinkClassName={"previousBttn"}
                   nextLinkClassName={"nextBttn"}
                   disabledClassName={"paginationDisabled"}
                   activeClassName={"paginationActive"}
               />
               }
            </div>
        </>
    );
};

export default Projects;