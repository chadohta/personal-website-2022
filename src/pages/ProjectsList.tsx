import React from "react";
import { ProjectDetails, ProjectItem } from "../components/ProjectItem";
import { projectData } from "../helpers/project-data";
import "../styles/ProjectsList.css";

const ProjectsList: React.FC<{}> = () => {
    return (
        <div id="projects">
            <div className="projects-body">
                {projectData.map((item: ProjectDetails) => {
                    return <ProjectItem {...item} />;
                })}
            </div>
        </div>
    );
};

export default ProjectsList;
