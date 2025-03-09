import Home from "./pages/Home/Home"
import Projects from "./pages/Home/sections/Projects/Projects"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App
