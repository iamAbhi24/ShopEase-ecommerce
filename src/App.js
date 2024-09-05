import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Itemdetails from "./pages/Itemdetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<Itemdetails/>} /> 
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
