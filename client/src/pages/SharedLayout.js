import Navbar from "../components/Navbar";
import { Outlet, Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="full-page">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
