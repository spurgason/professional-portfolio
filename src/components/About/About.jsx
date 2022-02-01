import "./about.scss";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Full-Stack Developer", "Tech Enthusiast", "Web Designer"],
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/shane.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Shane</h1>
          <h3>
            - <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ArrowDropDownIcon className="nextPage" />
        </a>
      </div>
    </div>
  );
}
