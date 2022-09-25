import bugTracker from "../assests/images/bug.jpg";
import store from "../assests/images/store.jpg";
import inventory from "../assests/images/inventory.jpg";

const project = [
  {
    logo: "logo",
    title: "Zapper",
    description: "Internal tool used to track bugs in software.",
    info: "Built with React, Node.js, and PostgreSQL.",
    live: "https://zapper3.herokuapp.com",
    code: "https://github.com/ronoc123/zapper",
    image: bugTracker,
  },
  {
    logo: "logo2",
    title: "Modern Sky",
    description: "Furniture e-commerce application.",
    info: "Built with React, Node.js, and MongoDB",
    live: "https://modern-sky2.herokuapp.com",
    code: "https://github.com/ronoc123/e-commerce",
    image: store,
  },
  {
    logo: "logo3",
    title: "PontexIM",
    description:
      "Inventory management application that tracks the stock of products for businesses.",
    info: "Build with C#, ASP.NET, React, Microsoft SQL Server",
    code: "https://github.com/ronoc123/Inventory-Management",
    live: "https://github.com/ronoc123/Inventory-Management",
    image: inventory,
  },
];

export default project;
