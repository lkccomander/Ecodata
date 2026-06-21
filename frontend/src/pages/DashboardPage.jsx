import PageHeader from "../components/PageHeader";
import RoutePager from "../components/RoutePager";
import { macroMetrics, sectors } from "../data/screens";

export default function DashboardPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Dashboard Adaptation"
        title="Global macro overview"
        description="The core dashboard view is reshaped into a route inside the shared shell while preserving the original economic-monitoring tone."
        primaryAction={{ label: "Review pricing", to: "/pricing" }}
        secondaryAction={{ label: "Manage users", to: "/users" }}
      />

      <section className="toolbar-strip">
        <button className="chip chip--active">Real-time</button>
        <button className="chip">Historical</button>
        <button className="chip">Projections</button>
      </section>

      <section className="metric-grid">
        {macroMetrics.map((metric) => (
          <article key={metric.label} className="metric-card metric-card--dashboard">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <em className={`tone tone--${metric.tone}`}>{metric.delta}</em>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="surface-card surface-card--large">
          <div className="surface-card__header">
            <div>
              <p className="section-eyebrow">Heatmap</p>
              <h3>Sector performance</h3>
            </div>
            <button className="button button--soft">View all sectors</button>
          </div>
          <div className="sector-grid">
            {sectors.map((sector) => (
              <div key={sector.name} className="sector-card">
                <span className="material-symbols-outlined">{sector.icon}</span>
                <strong>{sector.name}</strong>
                <em className={`tone tone--${sector.tone}`}>{sector.change}</em>
              </div>
            ))}
          </div>
          <div className="map-stage">
            <div className="map-stage__glow" />
            <div className="map-stage__copy">
              <h4>Advanced predictive map</h4>
              <p>Select a region to inspect concentration and commodity sensitivity.</p>
            </div>
          </div>
        </article>

        <article className="surface-card">
          <div className="surface-card__header">
            <div>
              <p className="section-eyebrow">Commodities</p>
              <h3>Live pricing tape</h3>
            </div>
            <span className="material-symbols-outlined">more_vert</span>
          </div>
          <div className="table-list">
            {[
              ["Gold", "$2,042.50", "+0.45%", "positive"],
              ["Crude Oil", "$78.12", "-1.20%", "negative"],
              ["Natural Gas", "$1.84", "-3.15%", "negative"],
              ["Copper", "$3.84", "+0.82%", "positive"],
              ["Silver", "$22.95", "0.00%", "neutral"],
            ].map(([asset, price, change, tone]) => (
              <div key={asset} className="table-row">
                <strong>{asset}</strong>
                <span>{price}</span>
                <em className={`tone tone--${tone}`}>{change}</em>
              </div>
            ))}
          </div>
        </article>
      </section>

      <RoutePager routeKey="dashboard" />
    </div>
  );
}
