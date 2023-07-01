import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
