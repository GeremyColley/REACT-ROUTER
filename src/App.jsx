import './App.css'
import { BrowserRouter as Router , 
  Route, 
  Link, 
  Routes,
  useLocation } from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  let location = useLocation;
  console.log("location : " + location.state?postTitle);
  return (
    <Router>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>



        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*">Not found</Route>
        </Routes>
      
    </Router>
  )
}

export default App