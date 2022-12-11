import React from "react";
import { SkillDetails, allSkills } from "../helpers/img-helper";
import "../styles/Skills.css";

const Skills = () => {
    return (
        <div id="skills">
            <div className="skills-body">
                {allSkills.map((item: SkillDetails, index: number) => {
                    return <img src={item.imagePath} alt={item.name} width="100" height="100" />;
                })}
            </div>
        </div>
    );
};

export default Skills;
