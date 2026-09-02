import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../../../components/layout/SiteHeader";
import { ROUTES } from "../../../lib/routes";

const stats = [
  ["2", "Commanders", "Partner Pair"],
  ["100", "Total Cards", "Singleton"],
  ["30", "Creatures", "Friends & Allies"],
  ["8", "Instants", "Quick Help"],
  ["12", "Sorceries", "Big Moments"],
  ["8", "Enchantments", "Blessings"],
  ["36", "Lands", "The Road Ahead"]
];

const mechanics = [
  ["Create Food", "Produce Food tokens to gain life and fuel your strategy."],
  ["Life Gain", "Gain life to protect your board and unlock synergies."],
  ["Draw & Value", "Turn small advantages into overwhelming momentum."]
];

export default function FoodDeckPage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedCard(null);
    }

    if (selectedCard) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("card-viewer-open");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("card-viewer-open");
    };
  }, [selectedCard]);

  function handleCardTilt(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 16;
    const rotateX = (0.5 - y) * 16;

    card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--shine-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--shine-y", `${(y * 100).toFixed(1)}%`);
  }

  function resetCardTilt(event) {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--shine-x", "50%");
    card.style.setProperty("--shine-y", "50%");
  }

  const cardViewerItems = [
    { name: "The Shire", image: "/shire-plains.png" },
    { name: "Mount Doom", image: "/mount-doom.png" },
    { name: "The One Ring", image: "/one-ring.png" }
  ];

  return (
    <div className="food-page cinematic-food">
      <SiteHeader theme="food-header" />

      <main>
        <section className="cinematic-food-hero">
          <div className="cinematic-food-bg" />
          <div className="shell cinematic-food-grid">
            <div className="cinematic-copy">
              <div className="lotr-mark">THE LORD OF THE RINGS</div>
              <div className="lotr-submark">TALES OF MIDDLE-EARTH</div>

              <h1>FOOD AND<br />FELLOWSHIP</h1>

              <div className="ornament-line">
                <span />
                <b>❧</b>
                <span />
              </div>

              <h2>A TABLE OF FRIENDS. A FEAST OF COURAGE.</h2>

              <p>
                Food, friendship and incremental value. Frodo and Sam lead the way,
                turning humble resources into strength and hope throughout every chapter.
              </p>

              <div className="cinematic-meta">
                <div>
                  <span>COLORS</span>
                  <strong>W · B · G</strong>
                </div>
                <div>
                  <span>PLAYERS</span>
                  <strong>2–4</strong>
                </div>
                <div>
                  <span>STRATEGY</span>
                  <strong>Value & Support</strong>
                </div>
              </div>

              <div className="cinematic-actions">
                <a href="#food-details" className="cinematic-btn primary">▣ View Decklist</a>
                <a href="#food-mechanics" className="cinematic-btn secondary">▶ How to Play</a>
              </div>
            </div>

            <div className="cinematic-visuals cards-only-stage">
              <div className="floating-cards" aria-label="Featured cards">
                <button
                  type="button"
                  className="feature-card shire-card"
                  onClick={() => setSelectedCard(cardViewerItems[0])}
                  aria-label="Expand The Shire card"
                >
                  <img src="/shire-plains.png" alt="The Shire Plains card" />
                </button>

                <button
                  type="button"
                  className="feature-card doom-card"
                  onClick={() => setSelectedCard(cardViewerItems[1])}
                  aria-label="Expand Mount Doom card"
                >
                  <img src="/mount-doom.png" alt="Mount Doom card" />
                </button>

                <button
                  type="button"
                  className="feature-card ring-card"
                  onClick={() => setSelectedCard(cardViewerItems[2])}
                  aria-label="Expand The One Ring card"
                >
                  <img src="/one-ring.png" alt="The One Ring card" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="cinematic-stats">
          <div className="shell cinematic-stats-grid">
            {stats.map(([number, label, note]) => (
              <div className="cinematic-stat" key={label}>
                <span>{label}</span>
                <strong>{number}</strong>
                <small>{note}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="cinematic-food-content" id="food-details">
          <div className="shell cinematic-panels">
            <article className="cinematic-panel">
              <h3>❧ Deck Identity</h3>
              <p>
                This deck celebrates the strength of friendship and the power of simple
                things done with courage. Generate Food tokens, gain life and create value
                that grows over time.
              </p>
              <div className="identity-icons">🍞 · 🍎 · 🍄 · 🫖</div>
            </article>

            <article className="cinematic-panel" id="food-mechanics">
              <h3>❧ Key Mechanics</h3>
              <div className="cinematic-mechanics">
                {mechanics.map(([title, text]) => (
                  <div className="cinematic-mechanic" key={title}>
                    <span>✦</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="cinematic-panel highlights">
              <h3>❧ Deck Highlights</h3>
              <ul>
                <li>Iconic Frodo & Sam partnership</li>
                <li>Strong Food and life-gain engine</li>
                <li>Steady value and card advantage</li>
                <li>Great for casual and mid-power tables</li>
                <li>Keeps the heart of the precon alive</li>
              </ul>
              <div className="shire-house">⌂</div>
            </article>
          </div>
        </section>

        <section className="cinematic-food-footer">
          <div className="shell cinematic-footer-grid">
            <blockquote>
              “It’s the deep breath after laughter, the feeling of home, and the knowledge that you are never really alone.”
              <span>— Samwise Gamgee</span>
            </blockquote>

            <div className="cinematic-footer-actions">
              <Link to={ROUTES.home} className="cinematic-footer-btn outline">← Back to Home</Link>
              <Link to={ROUTES.venomDeck} className="cinematic-footer-btn gold">View Venom Deck →</Link>
            </div>
          </div>
        </section>
      </main>

      {selectedCard && (
        <div
          className="card-viewer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCard.name} enlarged card view`}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCard(null);
          }}
        >
          <button
            type="button"
            className="card-viewer-close"
            onClick={() => setSelectedCard(null)}
            aria-label="Close card viewer"
          >
            ×
          </button>

          <div className="card-viewer-shell">
            <div
              ref={viewerRef}
              className="expanded-card"
              onPointerMove={handleCardTilt}
              onPointerLeave={resetCardTilt}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedCard.image} alt={selectedCard.name} />
              <div className="card-viewer-shine" aria-hidden="true" />
            </div>

            <div className="card-viewer-caption">
              <strong>{selectedCard.name}</strong>
              <span>Move your cursor over the card</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
