import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import Music from "./sections/Music";
import About from "./sections/About";
import Genres from "./sections/Genres";
import Vote from "./sections/Vote";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f2]">
      <Navbar />

      <main>
        <Hero />
        <Music />
        <About />
        <Genres />
        <Vote />
      </main>

      <Footer />
    </div>
  );
}

export default App;