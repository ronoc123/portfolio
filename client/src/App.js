import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About, Projects, Skills, Contact } from "./pages/index";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<About />}></Route>
            <Route path="resume" element={<Skills />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
