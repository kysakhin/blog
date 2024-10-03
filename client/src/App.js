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
  <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/allBlogs" element={<AllBlogs />} />
          <Route path="/category/:category" element={<HandleItems />} />
          <Route exact path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
  </>
  );
}

export default App;
