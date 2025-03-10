import Home from "./pages/Home/Home"
import About from "./pages/Home/sections/About/About";
import Projects from "./pages/Home/sections/Projects/Projects"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./pages/Home/sections/Skills/Skills";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};

export default App
