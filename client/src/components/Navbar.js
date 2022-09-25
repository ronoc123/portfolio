import Wrapper from "../assests/wrapper/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsFillHouseDoorFill, BsNewspaper } from "react-icons/bs";
import { GrContact, GrProjects } from "react-icons/gr";
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Wrapper>
      {isSidebarOpen && (
        <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      )}
      <nav className="navbar">
        <div className="tiny" onClick={openSidebar}>
          <FaBars />
        </div>
        <div className="name-container small-screen">
          <div>
            <span className="first-name">Conor</span>{" "}
            <span className="last-name">Kamperman</span>
          </div>
        </div>
        <div className="links-container tiny-screen">
          <Link
            to={"/"}
            className={value === 0 ? "link about active" : "link about"}
            onClick={() => setValue(0)}
          >
            <span className="icon big-screen">
              <BsFillHouseDoorFill />
            </span>
            About
          </Link>
          <Link
            to={"/projects"}
            className={value === 1 ? "link projects active" : "link project"}
            onClick={() => setValue(1)}
          >
            <span className="icon big-screen">
              <GrProjects />
            </span>
            Projects
          </Link>
          <Link
            to={"/resume"}
            className={value === 2 ? "link resume active" : "link resume"}
            onClick={() => setValue(2)}
          >
            <span className="icon big-screen">
              <BsNewspaper />
            </span>
            Resume
          </Link>
          <Link
            to={"/contact"}
            className={value === 3 ? "link active" : "link"}
            onClick={() => setValue(3)}
          >
            <span className="icon big-screen">
              <GrContact />
            </span>
            Contact
          </Link>
        </div>
        <div className="underline small-screen"></div>
        <div className="foot small-screen">
          <a
            className="logo"
            href="https://github.com/ronoc123"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://github.com/ronoc123"
            target="_blank"
            className="logo"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
