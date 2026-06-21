import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import RoutePager from "../components/RoutePager";

export default function PlatformPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Platform Adaptation"
        title="Predictive intelligence for global markets"
        description="This route refactors the original Stitch marketing screen into the front door of the overall product journey."
        primaryAction={{ label: "View dashboard", to: "/dashboard" }}
        secondaryAction={{ label: "See pricing", to: "/pricing" }}
      />

      <section className="marketing-hero">
        <div className="marketing-hero__copy">
          <p className="section-eyebrow">Institutional promise</p>
          <h2>Natural-language macro intelligence with analyst-grade structure</h2>
          <p>
            Transform raw indices into actionable strategies with forecasting, cross-asset
            comparisons, and secure institutional workflows.
          </p>
          <div className="hero-cta-row">
            <Link className="button button--primary" to="/pricing">
              Start free trial
            </Link>
            <Link className="button button--soft" to="/dashboard">
              View live dashboard
            </Link>
          </div>
        </div>
        <div className="hero-console">
          <div className="hero-console__header">
            <span>TERMINAL_V2.4</span>
            <strong>Forecast pulse</strong>
          </div>
          <div className="hero-bars">
            <span style={{ height: "58%" }} />
            <span style={{ height: "84%" }} />
            <span style={{ height: "42%" }} />
            <span style={{ height: "68%" }} />
            <span style={{ height: "94%" }} />
            <span style={{ height: "100%" }} />
            <span style={{ height: "62%" }} />
            <span style={{ height: "37%" }} />
          </div>
          <div className="hero-console__stats">
            <div>
              <span>Global GDP</span>
              <strong>+2.4%</strong>
            </div>
            <div>
              <span>Alpha correlation</span>
              <strong>0.89</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-cards grid-cards--three">
        <article className="feature-card">
          <span className="material-symbols-outlined">public</span>
          <h3>Real-time indices</h3>
          <p>Coverage across 180+ countries with high-frequency macro and market signals.</p>
        </article>
        <article className="feature-card">
          <span className="material-symbols-outlined">function</span>
          <h3>Math AI</h3>
          <p>Query complex datasets in plain language and turn them into explainable charts.</p>
        </article>
        <article className="feature-card">
          <span className="material-symbols-outlined">verified_user</span>
          <h3>Institutional security</h3>
          <p>Built for central banks, research teams, and regulated investment workflows.</p>
        </article>
      </section>

      <section className="split-banner">
        <div className="split-banner__panel">
          <p className="section-eyebrow">Trusted by finance teams</p>
          <h3>From onboarding to operational use</h3>
          <p>
            The mock flow now connects the marketing promise directly into the analytical
            workspace and the admin surfaces that support it.
          </p>
        </div>
        <div className="logo-strip">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <RoutePager routeKey="platform" />
    </div>
  );
}
