import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function DeckCard({
  title,
  eyebrow,
  description,
  to,
  className = ""
}) {
  const cardRef = useRef(null);

  function handlePointerMove(event) {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.setProperty("--mouse-x", `${x * 100}%`);
    card.style.setProperty("--mouse-y", `${y * 100}%`);
    card.style.setProperty("--mx", ((x - 0.5) * 8).toFixed(2));
    card.style.setProperty("--my", ((y - 0.5) * 8).toFixed(2));
  }

  function handlePointerLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
    card.style.setProperty("--mx", "0");
    card.style.setProperty("--my", "0");
  }

  return (
    <article
      ref={cardRef}
      className={`project-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="project-art-layer" aria-hidden="true" />
      <div className="project-sheen" aria-hidden="true" />

      <div className="project-eyebrow">{eyebrow}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="project-link" to={to}>Explore deck →</Link>
    </article>
  );
}
