import React from "react";
import Wrapper from "../assests/wrapper/Skills";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { GrCss3 } from "react-icons/gr";
import {
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiJavascript,
} from "react-icons/si";
import { MdOutlineViewColumn } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { TbLetterC } from "react-icons/tb";
import { BsMicrosoft } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";

const Skills = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <h1 className="title">Resume</h1>
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container">
          <span className="icon">
            <span className="icon-size javascript">
              <SiJavascript />
            </span>
            <span className="text">Javascript</span>
          </span>
          <span className="icon">
            <span className="icon-size react">
              <FaReact />
            </span>
            <span className="text">React</span>
          </span>
          <span className="icon">
            <span className="icon-size html">
              <AiOutlineHtml5 />
            </span>
            <span className="text">HTML</span>
          </span>
          <span className="icon">
            <span className="icon-size css">
              <DiCss3 />
            </span>
            <span className="text">CSS</span>
          </span>
          <span className="icon">
            <span className="icon-size node">
              <FaNodeJs />
            </span>
            <span className="text">Node.Js</span>
          </span>
          <span className="icon">
            <span className="icon-size postgresql">
              <SiPostgresql />
            </span>
            <span className="text">PostgreSQL</span>
          </span>
          <span className="icon">
            <span className="icon-size express">
              <SiExpress />
            </span>
            <span className="text">Express</span>
          </span>
          <span className="icon">
            <span className="icon-size mongodb">
              <SiMongodb />
            </span>
            <span className="text">MonogoDB</span>
          </span>
          <span className="icon">
            <span className="icon-size c">
              <BsMicrosoft />
            </span>
            <span className="text">C#</span>
          </span>
          <span className="icon">
            <span className="icon-size asp">
              <SiDotnet />
            </span>
            <span className="text">ASP.NET</span>
          </span>
          <span className="icon">
            <span className="icon-size mvc">
              <MdOutlineViewColumn />
            </span>
            <span className="text">MVC</span>
          </span>
          <span className="icon">
            <span className="icon-size ssms">
              <FiDatabase />
            </span>
            <span className="text">SSMS</span>
          </span>
        </div>
        <h2 className="education-title">Education</h2>
        <div className="education-container">
          <li>TEXAS TECH UNIVERISTY | LUBBOCK, TEXAS</li>

          <li>Bachelor of Science in Nutritional Sciences and Dietetics</li>
          <li>Graduation: December 2021</li>
          <li> Presidents Honor List two semesters</li>
        </div>
        <div className="resume-link">
          <a href="Resume.pdf" download="Resume.pdf">
            <button className="download-btn">Download Resume</button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
