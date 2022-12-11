import * as React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import AboutMe from "../pages/AboutMe";
import ProjectsList from "../pages/ProjectsList";
import Skills from "../pages/Skills";

export const AppRoute: React.FunctionComponent<{}> = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </Router>
    );
};
