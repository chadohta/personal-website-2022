import React from "react";

export interface ProjectDetails {
    firstName: string;
    secondName: string;
    desc: string;
    link: URL;
    color: string;
}

export const ProjectItem: React.FC<ProjectDetails> = ({
    firstName,
    secondName,
    desc,
    link,
    color,
}) => {
    return (
        <div className="proj-item project-wrapper">
            <a href={link.toString()} target="_blank" rel="noopener noreferrer">
                <div className="project-title">
                    <h1 className={"first-title " + color}> {firstName} </h1>
                    <h1> {secondName} </h1>
                </div>
                <div className={"circle " + color}></div>
                <div className="project-desc">
                    <p>{desc}</p>
                </div>
            </a>
        </div>
    );
};
