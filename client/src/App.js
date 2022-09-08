import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage, About, Projects, Skills } from "./pages/index";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
