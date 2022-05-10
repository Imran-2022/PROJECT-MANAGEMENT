import React from 'react';
import "./Pages.css"
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import SingleProject from '../Projects/SingleProject';
import AddProjects from '../../admin/AddProjects';
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:abc" element={<SingleProject />} />
                <Route path="addproject" element={<AddProjects />} />
            </Routes>
        </>

    );
};

export default Pages;