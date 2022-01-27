import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";

import "./app.scss"

function App() {
  return (
    <div className="app">
      <Nav/>
      <div className="sections">
        <About/>
        <Portfolio/>
        <Skill/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
