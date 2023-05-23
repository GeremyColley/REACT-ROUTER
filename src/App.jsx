import './App.css'
import { BrowserRouter as Router , 
  Route, 
  Link, 
  Routes } from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
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