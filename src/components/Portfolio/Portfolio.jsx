import { useEffect, useState } from "react";
import PortfolioMenu from "../PortfolioMenu/PortfolioMenu";
import "./portfolio.scss";
import {
  featuredPortfolio,
  frontEndPortfolio,
  backEndPortfolio,
  collaborativePortfolio,
} from "../../portfolioData.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [projects, setProjects] = useState([]);

  const menu = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "front-end",
      title: "Front-End",
    },
    {
      id: "back-end",
      title: "Back-End",
    },
    {
      id: "collaborative",
      title: "Collaborative",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setProjects(featuredPortfolio);
        break;
      case "front-end":
        setProjects(frontEndPortfolio);
        break;
      case "back-end":
        setProjects(backEndPortfolio);
        break;
      case "collaborative":
        setProjects(collaborativePortfolio);
        break;
      default: {
        setProjects(featuredPortfolio);
      }
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {menu.map((item) => (
          <PortfolioMenu
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {projects.map((project) => (
          <a className="item" href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.img} />
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
