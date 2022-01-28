import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";

import "./app.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
