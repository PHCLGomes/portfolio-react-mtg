import React from "react";
import SiteHeader from "../../components/layout/SiteHeader";
import { ROUTES } from "../../lib/routes";
import DeckCard from "./components/DeckCard";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="shell home-hero-grid">
            <div>
              <div className="micro-label">Technology // Cloud // Quality // Personal Projects</div>
              <h1 className="home-title">BUILD.<br />TEST.<br /><span>EVOLVE.</span></h1>
              <p className="home-lead">
                Sou um profissional de tecnologia com experiência em qualidade de software,
                automação e APIs, atualmente aprofundando minha trajetória em cloud computing
                e arquitetura AWS.
              </p>
              <div className="home-actions">
                <a className="home-btn primary" href="#journey">Minha trajetória</a>
                <a className="home-btn secondary" href="#projects">Ver projetos</a>
              </div>
            </div>

            <aside className="profile-board">
              <div className="board-number">01</div>
              <div className="board-label">CURRENT FOCUS</div>
              <strong>AWS Cloud & Solutions Architecture</strong>
              <div className="board-rule" />
              <div className="board-label">BACKGROUND</div>
              <strong>QA Engineering & Software Testing</strong>
              <div className="board-rule" />
              <div className="board-label">PERSONAL BUILD</div>
              <strong>Cloud-hosted portfolio + Commander showcases</strong>
            </aside>
          </div>
        </section>

        <section className="home-section" id="journey">
          <div className="shell">
            <div className="section-heading home-heading">
              <div>
                <div className="micro-label">About me</div>
                <h2>Uma trajetória entre negócio, qualidade e cloud.</h2>
              </div>
              <p>
                Minha formação e experiência me levaram por diferentes camadas de tecnologia:
                processos de negócio, automação de testes, integração de APIs e, mais recentemente,
                desenho e operação de soluções na AWS.
              </p>
            </div>

            <div className="timeline-grid">
              <article className="timeline-card">
                <span>01</span>
                <h3>Business Administration</h3>
                <p>Formação acadêmica em Administração, com base em processos, organização, negócio e tomada de decisão.</p>
              </article>
              <article className="timeline-card">
                <span>02</span>
                <h3>Quality Engineering</h3>
                <p>Experiência em QA, automação, APIs REST, regressão, integração, documentação e colaboração com desenvolvimento.</p>
              </article>
              <article className="timeline-card">
                <span>03</span>
                <h3>Cloud Computing</h3>
                <p>Evolução do foco profissional para AWS, infraestrutura, arquitetura cloud, segurança e automação de deploy.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="home-section study-section">
          <div className="shell study-grid">
            <div>
              <div className="micro-label">Recent studies</div>
              <h2>Construindo profundidade em AWS.</h2>
              <p className="section-text">
                Estudo arquitetura de soluções na AWS e aplico o conteúdo em projetos práticos,
                conectando teoria com infraestrutura real.
              </p>
            </div>
            <div className="study-stack">
              <div><b>✓</b><span>AWS Certified Cloud Practitioner</span></div>
              <div><b>→</b><span>AWS Solutions Architect – Associate</span></div>
              <div><b>→</b><span>EC2, S3, CloudFront, IAM, VPC e CloudFormation</span></div>
              <div><b>→</b><span>CI/CD, observabilidade e arquitetura serverless</span></div>
            </div>
          </div>
        </section>

        <section className="home-section" id="projects">
          <div className="shell">
            <div className="section-heading home-heading">
              <div>
                <div className="micro-label">Personal projects</div>
                <h2>Projetos que também contam quem eu sou.</h2>
              </div>
              <p>
                Além do trabalho em tecnologia, gosto de transformar interesses pessoais em projetos técnicos.
                Commander é um deles: estratégia, iteração, análise e identidade.
              </p>
            </div>

            <div className="project-grid">
              <DeckCard
                eyebrow="Commander // Golgari"
                title="Venom, Deadly Devourer"
                description="Um deck agressivo e temático, apresentado como uma edição especial de quadrinhos."
                to={ROUTES.venomDeck}
                className="venom-project"
              />
              <DeckCard
                eyebrow="Commander // Abzan"
                title="Food and Fellowship"
                description="Food, Hobbits, value e fellowship — preservando a alma do precon enquanto melhora a consistência."
                to={ROUTES.foodAndFellowshipDeck}
                className="food-project"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="shell footer-inner">
          <strong>PEDRO // PORTFOLIO</strong>
          <span>React · Personal Projects · AWS-ready architecture</span>
        </div>
      </footer>
    </>
  );
}
