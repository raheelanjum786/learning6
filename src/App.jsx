import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Wave background layer - only for hero section */}

      {/* Navigation layer */}
      <Navbar />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Hero Section with wave background */}
        <div className="min-h-screen">
          <HeroSection />
        </div>

        {/* About Section with enhanced background */}
        <div className="min-h-screen">
          <AboutSection />
        </div>
      </div>
    </div>
  );
}

export default App;
