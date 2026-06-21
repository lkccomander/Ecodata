import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import RoutePager from "../components/RoutePager";
import { routes } from "../data/screens";

export default function HomePage() {
  const pageRoutes = routes.filter((route) => route.key !== "home");

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Program Overview"
        title="A coherent mock site built from four Stitch screens"
        description="This demo turns the original disconnected screens into one navigable product with a shared shell, cross-links, and review-friendly flows."
        primaryAction={{ label: "Enter platform", to: "/" }}
        secondaryAction={{ label: "Open dashboard", to: "/dashboard" }}
      />

      <section className="hero-panel">
        <div className="hero-panel__copy">
          <p className="section-eyebrow">What changed</p>
          <h2>From isolated compositions to a route-based narrative</h2>
          <p>
            The original Stitch project contained separate experiences for marketing,
            dashboarding, pricing, and administration. This mock site binds them into a
            single institutional journey.
          </p>
        </div>
        <div className="hero-panel__metrics">
          <div className="metric-card">
            <span>Source project</span>
            <strong>MacroMicro Smart Indices</strong>
          </div>
          <div className="metric-card">
            <span>Imported screens</span>
            <strong>4 adapted views</strong>
          </div>
          <div className="metric-card">
            <span>Navigation model</span>
            <strong>Menu + previous/next</strong>
          </div>
        </div>
      </section>

      <section className="grid-cards">
        {pageRoutes.map((route) => (
          <Link key={route.key} className="nav-card" to={route.path}>
            <p className="section-eyebrow">{route.eyebrow}</p>
            <h3>{route.label}</h3>
            <p>{route.description}</p>
          </Link>
        ))}
      </section>

      <section className="split-banner">
        <div className="split-banner__panel">
          <p className="section-eyebrow">Adaptation rules</p>
          <ul className="feature-list">
            <li>Shared app shell and consistent spacing</li>
            <li>Semantic routes instead of raw Stitch IDs</li>
            <li>Fake interactions that reinforce the product flow</li>
          </ul>
        </div>
        <div className="split-banner__panel split-banner__panel--accent">
          <p className="section-eyebrow">Review focus</p>
          <ul className="feature-list">
            <li>Can users navigate every view from the menu?</li>
            <li>Do the pages feel like one product family?</li>
            <li>Are the dashboard and admin views readable on mobile?</li>
          </ul>
        </div>
      </section>

      <RoutePager routeKey="home" />
    </div>
  );
}
