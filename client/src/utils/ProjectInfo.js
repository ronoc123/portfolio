import bugTracker from "../assests/images/bug.jpg";
import store from "../assests/images/store.jpg";
import inventory from "../assests/images/inventory.jpg";
import movieinfo1 from "../assests/images/movieinfo1.jpg";
import { FaBug } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { SiGoogletagmanager } from "react-icons/si";

const project = [
  {
    logo: "logo",
    title: "Zapper",
    description: "Internal tool used to track bugs in software.",
    info: "Built with React, Node.js, and PostgreSQL.",
    live: "https://zapper3.herokuapp.com",
    code: "https://github.com/ronoc123/zapper",
    image: bugTracker,
    icon: <FaBug />,
    color: "green",
  },
  {
    logo: "logo2",
    title: "Modern Sky",
    description:
      "Furniture e-commerce application that allows for secure online payments utilizing the Stipe API.",
    info: "Built with React, Node.js, and MongoDB",
    live: "https://modern-sky2.herokuapp.com",
    code: "https://github.com/ronoc123/e-commerce",
    image: store,
    icon: <TbBuildingSkyscraper />,
    color: "orange",
  },
  {
    logo: "logo4",
    title: "Movie Hub",
    description:
      "Movie app that displays information about popular movies and Tv series",
    info: "Front-end application utilizing React and the Movie DB Api.",
    code: "https://github.com/ronoc123/movies",
    live: "https://movie-hub-watch.netlify.app/",
    image: movieinfo1,
    icon: <SiGoogletagmanager />,
    color: "orange",
  },
  {
    logo: "logo3",
    title: "PontexIM",
    description:
      "Inventory management application that tracks the stock of products for businesses.",
    info: "Build with C#, ASP.NET, React, Microsoft SQL Server",
    code: "https://github.com/ronoc123/Inventory-Management",
    image: inventory,
    icon: <SiGoogletagmanager />,
    color: "orange",
  },
];

export default project;
