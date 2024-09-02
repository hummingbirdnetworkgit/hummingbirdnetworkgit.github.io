import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Project from "./Pages/Project";
import Service from "./Pages/Service";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Support from "./Pages/Support";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/" element={<Project />} />
        <Route path="/service/" element={<Service />} />
        <Route path="/about/" element={<About />} />
        <Route path="/shop/" element={<Shop />} />
        <Route path="/support/" element={<Support />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
