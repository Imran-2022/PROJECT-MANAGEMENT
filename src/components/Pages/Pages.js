import React from 'react';
import "./Pages.css"
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import SingleProject from '../Projects/SingleProject';
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<SingleProject />} />
            </Routes>
        </>

    );
};

export default Pages;