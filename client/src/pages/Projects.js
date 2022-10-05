import React from "react";
import Wrapper from "../assests/wrapper/Projects";
import { Link } from "react-router-dom";
import project from "../utils/ProjectInfo";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import ProjectSmall from "../components/ProjectSmall";

const Projects = () => {
  const [item, setItem] = useState(0);

  const decrease = () => {
    if (item === 0) {
      setItem(project.length - 1);
      return;
    }
    setItem(item - 1);
  };
  const increase = () => {
    if (item + 1 > project.length - 1) {
      setItem(0);
      return;
    }
    setItem(item + 1);
  };

  return (
    <Wrapper>
      <div className="project-container">
        <button onClick={decrease} className="btn left">
          <FiArrowLeft />
        </button>
        <div className="project project-big">
          <div className="img-container">
            <img src={project[item].image} alt="" className="img" />
          </div>
          <h1 className="info">{project[item].title}</h1>
          <div className="info">{project[item].description}</div>

          <div className="btn-container info">
            <a href={project[item].code} target="_blank" className="code-btn">
              Code
            </a>
            {project[item].live ? (
              <a
                href={project[item]?.live}
                target="_blank"
                className="demo-btn"
              >
                Live Demo
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <ProjectSmall project={project} item={item} setItem={setItem} />
        <button onClick={increase} className="btn right">
          <FiArrowRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default Projects;
