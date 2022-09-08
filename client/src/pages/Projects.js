import React from "react";
import Wrapper from "../assests/wrapper/Projects";
import { Link } from "react-router-dom";
import project from "../utils/ProjectInfo";
import { useState } from "react";
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
        <div className="project">
          <div>{project[item].title}</div>
          <div>{project[item].description}</div>
          <div>{project[item].info}</div>
          <div>{project[item].code}</div>
          <div>{project[item].live}</div>

          <button onClick={decrease}>left </button>
          <button onClick={increase}>right</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
