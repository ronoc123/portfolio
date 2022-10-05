import Wrapper from "../assests/wrapper/About";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import image from "../assests/images/headshot.jpeg";

const About = () => {
  return (
    <Wrapper>
      <div className="about-container">
        <div className="ring big-screen">
          <img src={image} alt="" className="picture" />
        </div>
        <div className="info">
          <h1 className="heading">
            Hi, my name is <span className="name clr">Conor</span>{" "}
            <span className="name">Kamperman</span>.
          </h1>
          <h3 className="text">I'm a full-stack Web Developer.</h3>
          <div className="socials">
            <a
              className="logo"
              href="https://github.com/ronoc123"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
            <div className="links">
              <a href="Resume.pdf" download="Resume.pdf" className="link">
                Resume
              </a>
            </div>
            <a
              href="https://github.com/ronoc123"
              target="_blank"
              className="logo logo2"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
