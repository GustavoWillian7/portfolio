import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
      </main>
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
