import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation: React.FC<{}> = () => {
    return (
        <>
            <hr></hr>
            <nav className="main-nav">
                <ul className="nav-items">
                    <li className="about-collection">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            id="nav-about-me"
                        >
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li className="projects-collection">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            id="nav-project"
                        >
                            <span>Projects</span>
                        </NavLink>
                    </li>
                    <li className="contact-collection">
                        <NavLink
                            to="/skills"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            id="nav-skills"
                        >
                            <span>Skills</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </>
    );
};

export default Navigation;
