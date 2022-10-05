import Wrapper from "../assests/wrapper/SmallProject";
import { FaBug } from "react-icons";

const ProjectSmall = ({ project, item }) => {
  return (
    <Wrapper className="small-project">
      <h1 className="title">{project[item].title}</h1>
      <div className="icon">{project[item].icon}</div>
      <p className="text">{project[item].description}</p>
      <p className="text">{project[item].info}</p>
      <div className="btn-container">
        <a href={project[item].code} target="_blank" className="code-btn">
          Code
        </a>
        {project[item].live ? (
          <a href={project[item]?.live} target="_blank" className="demo-btn">
            Live Demo
          </a>
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectSmall;
