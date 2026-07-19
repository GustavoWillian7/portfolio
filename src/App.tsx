import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/App.css";

import MatrixRain from "./components/MatrixRain";

function App() {
  return (
    <div className="App">
      <MatrixRain />
      <Header />
      <main>
        <Hero />
      </main>
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
