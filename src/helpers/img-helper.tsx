import azure from "../assets/imgs/skills-imgs/azure.png";
import csharp from "../assets/imgs/skills-imgs/csharp.png";
import css3 from "../assets/imgs/skills-imgs/css3.png";
import git from "../assets/imgs/skills-imgs/git.png";
import github from "../assets/imgs/skills-imgs/github.png";
import html5 from "../assets/imgs/skills-imgs/html5.png";
import java from "../assets/imgs/skills-imgs/java.png";
import js from "../assets/imgs/skills-imgs/js.png";
import nodejs from "../assets/imgs/skills-imgs/node-js.png";
import npm from "../assets/imgs/skills-imgs/npm.png";
import react from "../assets/imgs/skills-imgs/react.png";
import sqlserver from "../assets/imgs/skills-imgs/sql-server.png";
import ts from "../assets/imgs/skills-imgs/ts.png";
import vscode from "../assets/imgs/skills-imgs/vs-code.png";
import vs from "../assets/imgs/skills-imgs/vs.png";

export interface SkillDetails { 
    imagePath: string;
    name: string;
}

export const allSkills: Array<SkillDetails> = [
    { 
        imagePath: html5,
        name: "HTML5"
    },
    { 
        imagePath: css3,
        name: "CSS3"
    },
    { 
        imagePath: react,
        name: "React"
    },
    { 
        imagePath: js,
        name: "Javascript"
    },
    { 
        imagePath: ts,
        name: "Typescript"
    },
    { 
        imagePath: azure,
        name: "Azure"
    },
    { 
        imagePath: vscode,
        name: "VSCode"
    },
    { 
        imagePath: vs,
        name: "Visual Studio"
    },
    { 
        imagePath: csharp,
        name: "C#"
    },
    { 
        imagePath: nodejs,
        name: "NodeJS"
    },
    { 
        imagePath: java,
        name: "Java"
    },
    { 
        imagePath: sqlserver,
        name: "SQL Server"
    },
    { 
        imagePath: git,
        name: "Git"
    },
    { 
        imagePath: github,
        name: "GitHub"
    },
    { 
        imagePath: npm,
        name: "npm"
    },
];
