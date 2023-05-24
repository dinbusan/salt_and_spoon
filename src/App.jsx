import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
  <div className="bg-sky-50">
<Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

<Footer />
  </div>
  )
}

export default App;
