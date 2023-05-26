import './App.css'
import { BrowserRouter as Router , 
  Routes,
  Route } from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from './components/Header';
import You from './pages/You';
import Me from './pages/Me';
import Default from './pages/Default';
import Product from './pages/Product';

/*****************************************************
 * Router :
 * 
 * 
 * Link : pour naviguer souvent déclarer dans un composant annexe.
 * 
 * 
 */

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/me" element={<Me />} />
          <Route path="/about/you" element={<You />} />
        </Route>
        <Route path='/product/:id' element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Router>
  )
}

export default App
