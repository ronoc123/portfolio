import Wrapper from "../assests/wrapper/SmallProject";

const ProjectSmall = ({ project, item }) => {
  return (
    <Wrapper className="small-project">
      <h1>{project[item].title}</h1>
      <div>Icon</div>
      <p>{project[item].description}</p>
      <p>{project[item].info}</p>
      <div>
        <a href={project[item].code} target="_blank" className="code-btn">
          Code
        </a>
        <a href={project[item].live} target="_blank" className="demo-btn">
          Live Demo
        </a>
      </div>
    </Wrapper>
  );
};

export default ProjectSmall;
