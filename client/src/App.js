import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";
import Home from "./pages/home";
import AllBlogs from "./pages/allBlogs";

function App() {
  return (
  <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/allBlogs" element={<AllBlogs />} />
        </Routes>
      </Router>
  </>
  );
}

export default App;
