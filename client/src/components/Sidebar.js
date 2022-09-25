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
          <Link to={"/product"} onClick={() => closeSidebar()} className="link">
            <span className="link-name">Collection</span>
          </Link>
          <Link
            to={"/checkout"}
            onClick={() => closeSidebar()}
            className="link"
          >
            <span className="link-name">Checkout</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
