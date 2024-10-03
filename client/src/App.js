import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";
import Home from "./pages/home";
import AllBlogs from "./pages/allBlogs";
import Blog from "./pages/blog";
import HandleItems from "./pages/handleItems";

function App() {
  return (
  <div className="root">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} activestyle />
          <Route exact path="/home" element={<Home />} activestyle/>
          <Route exact path="/allBlogs" element={<AllBlogs />} activestyle/>
          <Route path="/category/:category" element={<HandleItems />} activestyle/>
          <Route exact path="/blog/:id" element={<Blog />} activestyle/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
