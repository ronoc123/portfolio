import Wrapper from "../assests/wrapper/Navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="name-container">
          <div>
            <span className="first-name">Conor</span>{" "}
            <span className="last-name">Kamperman</span>
          </div>
        </div>
        <div className="links-container">
          <Link to={"/"} className="link about">
            About
          </Link>
          <Link to={"/projects"} className="link projects">
            Projects
          </Link>
          <Link to={"/"} className="link resume">
            Resume
          </Link>
          <Link to={"/"} className="link">
            Contact
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
