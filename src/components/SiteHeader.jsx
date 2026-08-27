import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SiteHeader({ theme = "default" }) {
  return (
    <header className={`site-header ${theme}`}>
      <div className="shell header-inner">
        <Link className="site-brand" to="/">
          <span className="brand-box">P</span>
          <span>
            <strong>PEDRO LEITE</strong>
            <small>Portfolio & Projects</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/decks/venom">Venom Deck</NavLink>
          <NavLink to="/decks/food-and-fellowship">Food & Fellowship</NavLink>
        </nav>
      </div>
    </header>
  );
}
