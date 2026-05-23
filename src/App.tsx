import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import "./styles/App.css";

import StarField from "./components/StarField";

function App() {
  return (
    <div className="App">
      <StarField />
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
