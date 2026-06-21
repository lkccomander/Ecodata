import PageHeader from "../components/PageHeader";
import RoutePager from "../components/RoutePager";
import { pricingPlans } from "../data/screens";

export default function PricingPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Pricing Adaptation"
        title="Access tiers for every research team"
        description="This view connects the commercial screen to the rest of the product flow while keeping the institutional layout language."
        primaryAction={{ label: "Open user admin", to: "/users" }}
        secondaryAction={{ label: "Back to dashboard", to: "/dashboard" }}
      />

      <section className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={
              plan.accent === "highlight"
                ? "pricing-card pricing-card--highlight"
                : "pricing-card"
            }
          >
            {plan.badge ? <div className="pricing-card__badge">{plan.badge}</div> : null}
            <p className="section-eyebrow">{plan.audience}</p>
            <h3>{plan.name}</h3>
            <div className="pricing-card__value">
              <strong>{plan.price}</strong>
              <span>{plan.suffix}</span>
            </div>
            <ul className="feature-list">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="button button--primary button--full">{plan.cta}</button>
          </article>
        ))}
      </section>

      <section className="surface-card">
        <div className="surface-card__header">
          <div>
            <p className="section-eyebrow">Feature matrix</p>
            <h3>Capability comparison</h3>
          </div>
        </div>
        <div className="comparison-grid">
          {[
            ["Historical data reach", "2 years", "10 years", "Unlimited"],
            ["Predictive modeling", "No", "Basic", "Advanced"],
            ["Team collaboration", "Personal", "Up to 5 seats", "Unlimited seats"],
            ["Custom data ingestion", "No", "No", "Yes"],
          ].map(([label, free, plus, pro]) => (
            <div key={label} className="comparison-row">
              <strong>{label}</strong>
              <span>{free}</span>
              <span>{plus}</span>
              <span>{pro}</span>
            </div>
          ))}
        </div>
      </section>

      <RoutePager routeKey="pricing" />
    </div>
  );
}
