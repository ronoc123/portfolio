import Wrapper from "../assests/wrapper/Sidebar";

import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Sidebar = ({ closeSidebar, isSidebarOpen }) => {
  return (
    <Wrapper>
      <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button className="close-btn" onClick={() => closeSidebar()}>
          <CgCloseR />
        </button>
        <div className="logo-containers">
          <span className="icon">
            <FaUserAlt />
          </span>
          <span className="title">Portfolio</span>
        </div>
        <div className="links-container">
          <Link to={"/"} onClick={() => closeSidebar()} className="link">
            <span className="link-name">Home</span>
          </Link>
          <Link
            to={"/projects"}
            onClick={() => closeSidebar()}
            className="link"
          >
            <span className="link-name">Projects</span>
          </Link>
          <Link to={"/resume"} onClick={() => closeSidebar()} className="link">
            <span className="link-name">Resume</span>
          </Link>
          <Link to={"/contact"} onClick={() => closeSidebar()} className="link">
            <span className="link-name">Contact</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
