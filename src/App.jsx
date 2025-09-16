import "./App.css";
import HeroSection from "./components/HeroSection";
import { WavesDemo } from "./components/background";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Wave background layer */}
      <div className="fixed inset-0 z-0">
        <WavesDemo />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
