import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../lib/routes";

export default function SiteHeader({ theme = "default" }) {
  return (
    <header className={`site-header ${theme}`}>
      <div className="shell header-inner">
        <Link className="site-brand" to={ROUTES.home}>
          <span className="brand-box">P</span>
          <span>
            <strong>PEDRO LEITE</strong>
            <small>Portfolio & Projects</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <NavLink to={ROUTES.home}>Home</NavLink>
          <NavLink to={ROUTES.venomDeck}>Venom Deck</NavLink>
          <NavLink to={ROUTES.foodAndFellowshipDeck}>Food & Fellowship</NavLink>
        </nav>
      </div>
    </header>
  );
}
