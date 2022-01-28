import "./nav.scss";

import Mail from "@material-ui/icons/Mail"

export default function Nav({menuOpen, setMenuOpen}) {
  return (
    <div className={"nav " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">spurgason</a>
          <div className="quickContact">
            <Mail className="icon"/> 
            <span>shanepurgason.98@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
