import React from "react";
import "../styles/AboutMe.css";
import grad from "../assets/imgs/photo-me.jpg";
import githubLogo from "../assets/imgs/github-logo.png";

const AboutMe: React.FC<{}> = () => {
    return (
        <div id="about-me">
            <div className="about-me-body">
                <div className="body-item">
                    <img src={grad} alt="Myself" className="about-me-img" />
                </div>

                <div id="about-desc" className="body-item">
                    <div className="body-text">
                        <h1 className="about-me-title"> Hello, I'm Chad. </h1>

                        <p>
                            I'm a software developer based in Honolulu, HI currently focused on
                            building web applications with React/Typescript. I graduated from the
                            University of Washington with a B.S. in Informatics and during my free
                            time I enjoy reading, hiking, and exploring new places.
                        </p>
                        <br></br>
                        <p>
                            Feel free to email me at{" "}
                            <a href="mailto:chadohta@gmail.com" className="contact-email">
                                {" "}
                                chadohta@gmail.com{" "}
                            </a>
                            or connect with me on{" "}
                            <a
                                href="https://github.com/chadohta/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={githubLogo} alt="github logo" className="contact-icon" />
                            </a>
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
