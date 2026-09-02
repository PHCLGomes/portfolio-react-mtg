import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../../../components/layout/SiteHeader";
import { ROUTES } from "../../../lib/routes";

const cards = [
  { name: "Venom, Eddie Brock", type: "Creature", role: "Theme / Pressure" },
  { name: "Radioactive Spider", type: "Creature", role: "Early Defense" },
  { name: "Assassin's Trophy", type: "Instant", role: "Premium Removal" },
  { name: "Abrupt Decay", type: "Instant", role: "Efficient Interaction" },
  { name: "Culling Ritual", type: "Sorcery", role: "Reset / Mana Swing" },
  { name: "Kraven the Hunter", type: "Creature", role: "Pressure / Theme" },
  { name: "The Soul Stone", type: "Utility", role: "Value Engine" },
  { name: "Grendel, Spawn of Knull", type: "Creature", role: "Finisher / Theme" },
];

export default function VenomDeckPage() {
  const [search, setSearch] = useState("");
  const visibleCards = useMemo(
    () => cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <div className="deck-page venom-theme">
      <SiteHeader theme="venom-header" />
      <main>
        <section className="venom-hero">
          <div className="shell venom-hero-grid">
            <div>
              <div className="comic-badge">SPECIAL ISSUE // COMMANDER BUILD</div>
              <h1 className="venom-title">VENOM<br /><span>DEADLY</span><br />DEVOURER</h1>
              <p className="venom-lead">
                Agressivo, resiliente e sempre evoluindo. O objetivo é melhorar desempenho
                sem transformar o deck em algo que deixe de parecer Venom.
              </p>
              <div className="deck-actions">
                <Link className="comic-btn yellow" to={ROUTES.home}>← Home</Link>
                <Link className="comic-btn blue" to={ROUTES.foodAndFellowshipDeck}>Food & Fellowship →</Link>
              </div>
            </div>
            <div className="venom-art-wrap">
              <img src="/venom-borderless.png" alt="Venom borderless" className="venom-art" />
              <div className="comic-note">BUILT TO SURVIVE.<br />BUILT TO EVOLVE.</div>
            </div>
          </div>
        </section>

        <section className="deck-section">
          <div className="shell">
            <div className="deck-section-head">
              <div><small>Deck Profile</small><h2>Inside the organism.</h2></div>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar carta..." className="deck-search" />
            </div>

            <div className="deck-stats">
              <div><strong>BG</strong><span>Color identity</span></div>
              <div><strong>30</strong><span>Creatures</span></div>
              <div><strong>36</strong><span>Lands</span></div>
              <div><strong>6</strong><span>Commander MV</span></div>
            </div>

            <div className="venom-card-grid">
              {visibleCards.map(card => (
                <article key={card.name} className="venom-mini-card">
                  <span>{card.type}</span>
                  <h3>{card.name}</h3>
                  <p><b>Role:</b> {card.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
