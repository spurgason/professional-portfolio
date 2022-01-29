import "./portfolio-menu.scss";

export default function PortfolioMenu({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioMenu active" : "portfolioMenu"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
